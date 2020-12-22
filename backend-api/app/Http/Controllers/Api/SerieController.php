<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\DB;
use App\Models\Serie;
use App\Models\UserSerie  as Watchlist;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;

class SerieController extends Controller
{
    public function __construct()
    {
        $this->serieModel = new Serie;
        $this->watchlistModel = new Watchlist;
    }

    public function index()
    {
        
    }

    public function store(Request $request)
    {
        $dataForm = $request->all();
        // dd($dataForm);

        // Rules
        $rules = [
            'title'      => 'required|min:2|max:60',
            'image'      => 'required|'
        ];

        $validator = Validator::make($request->all() , $rules);

        if ($validator->fails()) {
            return response()->json(formatMessage(400, $validator->messages()), 400);
        }

        $this->serieModel->title = $dataForm['title'];
        $this->serieModel->image = $dataForm['image'];
        $this->serieModel->save();

        return response()->json($dataForm, 201);
    }

    public function addSerieWatchlist(Request $request)
    {
        $dataForm = $request->all();
        // dd($dataForm);

        /**
         * Rules
         * 
         * Validando chaves primarias compostas
         * https://laravel.com/docs/5.1/validation#rule-unique
         * 
         * https://stackoverflow.com/questions/26121417/laravel-validation-exists-with-additional-column-condition-custom-validation
         */
        $rules = [
            /** [exists] select count(*) as aggregate from series  where `id` = 4 */
            'user_id'      => ['required','integer','exists:users,id'],
            'serie_id'     => ['required','integer','exists:series,id'],

            /** [unique] select count(*) as aggregate from `users_series` where `user_id` = 2 and `type` <> 'watched' and `serie_id` = 3 */
            'user_id'      => 'unique:users_series,user_id,"watched",type,serie_id,'.$dataForm['serie_id'],
            'serie_id'      => 'unique:users_series,serie_id,"watchlist",type,user_id,'.$dataForm['user_id']
        ];

        $validator = Validator::make($request->all() , $rules);

        if ($validator->fails()) {
            return response()->json(formatMessage(400, $validator->messages()), 400);
        }

        $this->watchlistModel->user_id = $dataForm['user_id'];
        $this->watchlistModel->serie_id = $dataForm['serie_id'];
        // $this->watchlistModel->type = 'watchlist';
        $this->watchlistModel->save();
        return response()->json($dataForm, 201);
    }

    public function show(Serie $serie)
    {
        //
    }


    public function update(Request $request, Serie $serie)
    {
        //
    }

    public function updateSerieWatchlist(Request $request, $serie_id, $user_id)
    {
        $type = $request->input('type');
        // dd($request);

        // Checks if parameter was passed with $id of type Integer
        if ($response = $this->checkParamId($serie_id, $user_id)) { return $response; };

        // $dataForm = $request->all();
        // echo 'serie_id ' .  $serie_id . '<br/>';
        // echo 'serie_id ' .  $user_id . '<br/>';
        // dd($dataForm);

        $rules = [ 
            'user_id'      => ['required','integer','exists:users,id'],
            'serie_id'     => 'required|integer|exists:series,id',
            'type'         => 'required|string|in:watchlist,watched',
        ];

        $validator = Validator::make(['serie_id' => $serie_id, 'user_id' => $user_id,'type' => $type],  $rules);

        if ($validator->fails()) {
            return response()->json(formatMessage(400, $validator->messages()), 400);
        }

        $table = 'users_series';
        $query = [
            ['user_id', '=', $user_id],
            ['serie_id', '=', $serie_id],
        ];

        // Checks if exists id's or condicional  in database
        if ($response = $this->findDatabaseId($table, $query)) { return $response; };

        try {
            // Update table 
            DB::table($table)->where($query)->update(['type' => $type]);
            return response()->json('success' , 200);
        } catch (\Exception $e) {
            if(config('app.debug')):
                return response()->json(formatMessage(1011, $e->getMessage()),  500);
            endif;
            return response()->json(formatMessage(500, 'Something unexpected prevented him from fulfilling the request'), 500);
        }

        
    }

    public function destroy(Serie $serie)
    {
        //
    }

    /**
     * Verifica se um ou mais parametros foram passados
     */
    private function checkParamId($id1, $id2 = null)
    {
        if ($id2):
            $validator = Validator::make(['id1'=> $id1, 'id2'=> $id2], ['id1' => 'integer', 'id2' => 'integer']);
        else:
            $validator = Validator::make(['id1'=> $id1], ['id1' => 'integer']);
        endif;

        if ($validator->fails()) {
            return  response()->json(formatMessage(400, 'Check that you have correctly entered the ID parameter!'), 400);
        }
    }

    private function findDatabaseId($table, $query)
    {
        try {

            $result  = DB::table($table)->where($query)->get();

            if( count( $result ) == 0 ):
                return response()->json(formatMessage(404, 'No results found.'), 404);
             endif;

        } catch (\Exception $e) {

            if(config('app.debug')):
                return response()->json(formatMessage(1012, $e->getMessage()), 500);
            endif;

            return response()->json(formatMessage(500, 'Something unexpected happened'), 500 );
        }
    }
}

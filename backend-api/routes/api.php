<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::post('auth/login', 'Api\AuthController@login')->name('auth.login');
Route::post('auth/register', 'Api\AuthController@register')->name('auth.register');



Route::group(['middleware' => ['apiJwt']], function() {
    Route::post('auth/logout', 'Api\AuthController@logout')->name('auth.logout');
    
    Route::get('auth/me', 'Api\AuthController@me')->name('auth.me');

    // User
    Route::get('v1/user', 'Api\UserController@index')->name('user.index');

    // Product
    Route::get('v1/product', 'Api\ProductController@index')->name('product.index');
    Route::post('v1/product', 'Api\ProductController@store')->name('product.store');
    Route::get('v1/product/{id}', 'Api\ProductController@show')->name('product.show');
    Route::put('v1/product/{id}', 'Api\ProductController@update')->name('product.update');
    Route::delete('v1/product/{id}', 'Api\ProductController@destroy')->name('product.destroy');

    // Series 
    Route::get('v1/series', 'Api\SerieController@store')->name('serie.index');
    Route::post('v1/series', 'Api\SerieController@store')->name('serie.store');
    Route::get('v1/series/{serie_id}', 'Api\SerieController@store')->name('serie.show');
    Route::put('v1/series/{serie_id}', 'Api\SerieController@store')->name('serie.update');
    Route::delete('v1/series/{serie_id}', 'Api\SerieController@store')->name('serie.destroy');
    
    // Series watchlist
    Route::get('v1/series/users/{user_id}/watchlist', 'Api\SerieController@updateSerieWatchlist')->name('serie-watchlist.show');
    Route::post('v1/series/users/watchlist', 'Api\SerieController@addSerieWatchlist')->name('serie-watchlist.store');
    Route::put('v1/series/{serie_id}/users/{user_id}/watchlist', 'Api\SerieController@updateSerieWatchlist')->name('serie-watched.update');
    // Route::patch('v1/series/{serie_id}/users/{user_id}/watchlist', 'Api\SerieController@updateSerieWatchlist')->name('serie-watched.update');
    // Route::delete('v1/series/{serie_id}/users/{user_id}/watchlist', 'Api\SerieController@updateSerieWatchlist')->name('serie-watched.update');

});

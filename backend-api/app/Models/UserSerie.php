<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserSerie extends Model
{
    protected $fillable = ['user_id', 'serie_id', 'type'];
    protected $table = 'users_series';
}

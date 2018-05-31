<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Event extends Model
{
    use SoftDeletes;

    protected $dates = ['starts_at', 'deleted_at'];

    protected $guarded = [];

    public static function future($perPage = 20)
    {
        return self::where('starts_at', '>', time())
            ->where('approved', 1)
            ->orderBy('starts_at')
            ->simplePaginate($perPage);
    }
}

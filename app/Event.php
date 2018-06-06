<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Event extends Model
{
    use SoftDeletes;

    protected $dates = ['starts_at', 'deleted_at'];

    protected $guarded = [];

    public function getImageAttribute($value)
    {
        return url('/storage/'.$value);
    }

    public static function future()
    {
        return self::where('starts_at', '>', time())
            ->where('approved', 1)
            ->orderBy('starts_at');
    }

    public static function pending()
    {
        return self::whereNull('approved')
            ->orderBy('created_at')
            ->get();
    }
}

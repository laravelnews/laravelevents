<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Event extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = ['id'];

    protected $casts = [
        'approved' => 'boolean',
        'starts_at' => 'datetime',
    ];

    public function getRouteKeyName()
    {
        return 'uuid';
    }

    protected static function booted()
    {
        static::creating(function ($model) {
            $model->uuid = Str::uuid();
        });
    }

    public static function future()
    {
        return self::where('starts_at', '>', Carbon::now())
            ->where('approved', true)
            ->orderBy('starts_at');
    }

    public static function pending()
    {
        return self::whereNull('approved')
            ->orderBy('created_at')
            ->get();
    }
}

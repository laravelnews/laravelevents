<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\View;
use Spatie\Feed\Feedable;
use Spatie\Feed\FeedItem;

class Event extends Model implements Feedable
{
    use SoftDeletes;

    protected $dates = ['starts_at', 'deleted_at'];

    protected $guarded = [];

    public function getFullImageAttribute($_)
    {
        return $this->image;
    }

    public static function future()
    {
        return self::where('starts_at', '>', Carbon::now())
            ->where('approved', 1)
            ->orderBy('starts_at');
    }

    public static function pending()
    {
        return self::whereNull('approved')
            ->orderBy('created_at')
            ->get();
    }

    /**
     * @return array|\Spatie\Feed\FeedItem
     */
    public function toFeedItem()
    {
        $summary = View::make('feedItem', ['event' => $this])->render();

        return FeedItem::create()
            ->id($this->id)
            ->title($this->title)
            ->author('')
            ->summary($summary)
            ->updated($this->updated_at)
            ->link($this->url);
    }

    public static function getFeedItems()
    {
        return self::where('starts_at', '>', Carbon::now())
            ->where('approved', 1)
            ->orderBy('created_at', 'desc')
            ->get();
    }
}

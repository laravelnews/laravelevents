<?php

return [

    'feeds' => [
        'news' => [
            /*
             * Here you can specify which class and method will return
             * the items that should appear in the feed. For example:
             * '\App\Model@getAllFeedItems'
             */
            'items' => 'App\Event@getFeedItems',

            /*
             * The feed will be available on this url.
             */
            'url' => '/feed',

            'title' => 'New events at ' . config('app.name', 'Laravel'),

            /*
             * Custom view for the items.
             *
             * Defaults to feed::feed if not present.
             */
            'view' => 'feed::feed',
        ],
    ],

];

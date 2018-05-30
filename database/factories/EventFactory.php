<?php

use Faker\Generator as Faker;

$factory->define(\App\Event::class, function (Faker $faker) {
    return [
        'title' => $faker->jobTitle,
        'description' => $faker->paragraph,
        'starts_at' => strtotime('next wednesday'),
        'url' => $faker->url,
        'location' => $faker->city.' '.$faker->country,
        'approved' => 1,
    ];
});

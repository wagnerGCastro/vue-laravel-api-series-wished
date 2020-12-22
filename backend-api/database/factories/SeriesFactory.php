<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Series::class, function (Faker $faker) {
    return [
        'title' => $faker->name,
        'image' => $faker->text
    ];
});

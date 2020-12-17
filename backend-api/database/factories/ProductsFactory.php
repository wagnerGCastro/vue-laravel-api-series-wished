<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\Product::class, function (Faker\Generator $faker) {

    return [
        'name' => $faker->name,
        'price' => $faker->randomFloat(2, 0, 8),
        'description' => $faker->text,
        'color_variation' => $faker->randomElement(['Y','N']),
    ];
});

<?php

use Illuminate\Database\Seeder;

class SerieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\Series::class, 10)->create();
    }
}

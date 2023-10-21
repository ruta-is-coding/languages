<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Language;
use App\Models\Meetup;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MeetupLanguage>
 */
class MeetupLanguageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'language_id' => Language::inRandomOrder()->first()->id,
            'meetup_id' => Meetup::inRandomOrder()->first()->id,
        ];
    }
}

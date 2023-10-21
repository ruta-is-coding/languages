<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Country;
use App\Models\Profile;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Meetup>
 */
class MeetupFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->text(5),
            'city' => fake()->city(),
            'photo' => fake()->imageUrl(640, 480, 'animals', true),
            'description' => fake()->sentence(30),
            'date' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d H:i:s'),
            'country_id' => Country::inRandomOrder()->first()->id,
            'profile_id' => Profile::inRandomOrder()->first()->id,
        ];
    }
}

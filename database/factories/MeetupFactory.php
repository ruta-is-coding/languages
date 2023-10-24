<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Country;
use App\Models\User;

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
            'name' => fake()->sentence(3),
            'city' => fake()->city(),
            'place' => fake()->sentence(5),
            'photo' => fake()->imageUrl(640, 480, 'animals', true),
            'description' => fake()->sentence(30),
            'date' => fake()->date('Y-m-d', '+1 year'),
            'time' => fake()->time('H:i A', 'now'),
            'country_id' => Country::inRandomOrder()->first()->id,
            'user_id' => User::inRandomOrder()->first()->id,
        ];
    }
}

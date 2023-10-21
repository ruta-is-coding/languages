<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Profile>
 */
class ProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'full_name' => fake()->name(),
            'photo' => fake()->imageUrl(640, 480, 'people', true),
            'about_me' => fake()->sentence(30),
            'date_of_birth' => fake()->dateTimeBetween('-100 years', '-16 years')->format('Y-m-d'),
            'user_id' => User::inRandomOrder()->first()->id,
        ];
    }
}

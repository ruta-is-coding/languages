<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Language;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $europeanLanguages = [
            'English',
            'French',
            'German',
            'Spanish',
            'Italian',
            'Portuguese',
            'Dutch',
            'Swedish',
            'Norwegian',
            'Danish',
            'Finnish',
            'Russian',
            'Polish',
            'Ukrainian',
            'Greek',
            'Turkish',
            'Hungarian',
            'Czech',
            'Slovak',
            'Romanian',
            'Bulgarian',
            'Serbian',
            'Croatian',
            'Slovenian',
            'Bosnian',
            'Macedonian',
            'Albanian',
            'Estonian',
            'Latvian',
            'Lithuanian',
            'Irish',
            'Scottish Gaelic',
        ];

        foreach ($europeanLanguages as $language) {
            Language::create(['language_name' => $language]);
        }
    }
}

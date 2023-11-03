<?php

namespace App\Rules;

use DateTime;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class NotInPast implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $selectedDate = date_create_from_format('Y-m-d', $value);
        $currentDate = date_create();

        // Set the time component to midnight (00:00:00) for both dates
        date_time_set($selectedDate, 0, 0, 0);
        date_time_set($currentDate, 0, 0, 0);

        // Compare the selected date with the current date
        if ($selectedDate < $currentDate) {
            // If the selected date is in the past, fail the validation
            $fail("The $attribute must not be in the past.");
        }
    }
}

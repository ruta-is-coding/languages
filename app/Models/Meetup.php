<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meetup extends Model
{
    protected $fillable = [
        'name',
        'city',
        'description',
        'date',
        'country_id',
        'user_id',
        'language_id',
    ];

    use HasFactory;
}

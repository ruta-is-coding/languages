<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MeetupLanguage extends Model
{
    use HasFactory;
    protected $fillable = [
        'meetup_id',
        'language_id',
    ];
}

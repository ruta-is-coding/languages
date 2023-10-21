<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class MeetupLanguage extends Model
{
    use HasFactory;

    protected $fillable = [
        'language_id',
        'meetup_id',
    ];
}

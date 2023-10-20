<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meetup_participant extends Model
{
    protected $fillable = [
        'user_id',
        'meetup_id',
    ];

    use HasFactory;
}

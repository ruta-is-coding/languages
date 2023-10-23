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
        'photo',
        'country_id',
        'user_id',
    ];

    public function languages()
    {
        return $this->belongsToMany(Language::class, 'meetup_languages', 'meetup_id', 'language_id');
    }

    use HasFactory;
}

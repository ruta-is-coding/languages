<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    protected $fillable = [
        'language_name'
    ];
    public $timestamps = false;

    public function meetups()
    {
        return $this->belongsToMany(Meetup::class, 'meetup_languages', 'language_id', 'meetup_id');
    }

    use HasFactory;
}

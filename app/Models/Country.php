<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Country extends Model
{
    protected $fillable = [
        'country_name'
    ];
    public $timestamps = false;

    public function meetups(): HasMany
    {
        return $this->hasMany(Meetup::class);
    }

    use HasFactory;
}

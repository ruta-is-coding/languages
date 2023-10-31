<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Meetup extends Model
{
    protected $fillable = [
        'name',
        'city',
        'place',
        'description',
        'date',
        'time',
        'photo',
        'country_id',
        'user_id',
    ];

    public function languages()
    {
        return $this->belongsToMany(Language::class, 'meetup_languages');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function meetup_participants(): HasMany
    {
        return $this->hasMany(MeetupParticipant::class);
    }

    use HasFactory;
}

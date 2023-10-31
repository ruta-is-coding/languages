<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MeetupParticipant extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'full_name',
        'meetup_id',
    ];

    public function meetup(): BelongsTo
    {
        return $this->belongsTo(Meetup::class);
    }
}

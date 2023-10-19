<?php

namespace App\Http\Controllers;

use App\Models\Meetup;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MeetupController extends Controller
{
    public function index()
    {
        $meetup = Meetup::all();
        return Inertia::render('Meetups', [
            'meetups' => $meetup,
        ]);
    }
}

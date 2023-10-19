<?php

namespace App\Http\Controllers;

use App\Models\Meetup;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MeetupController extends Controller
{
    public function index()
    {
        $meetupsList = Meetup::all();
        return Inertia::render('Meetups', [
            'meetupsList' => $meetupsList,
        ]);
    }
}

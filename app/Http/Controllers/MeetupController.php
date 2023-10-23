<?php

namespace App\Http\Controllers;

use App\Models\Meetup;
use App\Models\Country;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MeetupController extends Controller
{
    public function index()
    {
        $meetupsList = Meetup::all();
        $countrylist = Country::all();
        return Inertia::render('Meetups', [
            'meetupsList' => $meetupsList,
            'countries' => $countrylist,
        ]);
    }

    public function meetupForm()
    {
        $countrylist = Country::all();
        return Inertia::render('CreateMeetup', [
            'countries' => $countrylist,
        ]);
    }
}

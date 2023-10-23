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
        return Inertia::render('Meetups', [
            'meetupsList' => Meetup::all(),
            'countries' => Country::all(),
        ]);
    }

    public function create(Request $request)
    {
        $validated = $request->validate([

            'name' => 'required|min:5|max:200',
            'city' => 'required|min:3|max:100',
            'description' => 'required',
            'date' => 'required',
            'country_id' => 'required'
        ]);

        $validated['photo'] = $request->file('photo')->store('meetupPhotos', 'public');
        $validated['user_id'] = auth()->user()->id;

        Meetup::create($validated);
    }

    public function meetupForm()
    {
        return Inertia::render('Meetups/CreateMeetup', [
            'countries' => Country::all(),
        ]);
    }

    public function userMeetups()
    {
        // $meetups=Meetup::find();
        return Inertia::render('Meetups/UserMeetups');
    }
}

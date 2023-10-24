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

    public function createMeetup(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|min:5|max:200',
                'city' => 'required|min:3|max:200',
                'place' => 'required|min:5|max:200',
                'description' => 'required',
                'photo' => 'required|mimes:jpeg,png,gif,bmp,tiff,svg',
                'country_id' => 'required',
                'date' => 'required',
                'time' => 'required',
            ]);

            $validated['photo'] = $request->file('photo')->store('meetupPhotos', 'public');
            $validated['user_id'] = auth()->user()->id;

            Meetup::create($validated);

            return redirect()->route('meetup.new')->with('success', 'Meetup created successfully');
        } catch (\Exception $e) {
            return redirect()->route('meetup.new')->with('error', 'Failed to upload the meetup');
        }
    }

    public function newMeetup()
    {
        return Inertia::render('Meetups/CreateMeetup', [
            'countries' => Country::all(),
            'csrf_token' => csrf_token(),
        ]);
    }

    public function userMeetups()
    {
        // $meetups=Meetup::find();
        return Inertia::render('Meetups/UserMeetups');
    }
}

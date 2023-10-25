<?php

namespace App\Http\Controllers;

use App\Models\Meetup;
use App\Models\Language;
use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MeetupController extends Controller
{
    public function index()
    {
        return Inertia::render('Meetups', [
            'meetupsList' => Meetup::with('languages')->get(),
            'countries' => Country::all(),
            'languages' => Language::all(),
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

            return redirect()->route('add.languages')->with('success', 'Meetup created successfully');
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

    public function addLanguages()
    {
        return Inertia::render('Meetups/AddLanguages', [
            'languages' => Language::all(),
            'csrf_token' => csrf_token(),
        ]);
    }

    public function userMeetups()
    {
        $user_id = auth()->user()->id;
        return Inertia::render('Meetups/UserMeetups', [
            'user_meetups' => Meetup::where('user_id', $user_id)->get(),
        ]);
    }

    public function singleMeetup($id)
    {
        return Inertia::render('Meetups/SingleMeetup', [
            'meetup' => Meetup::with('languages')->get()->find($id),
        ]);
    }

    public function meetupLanguages()
    {
        $languages = Meetup::where('id', 1)->with('languages')->get();
    }

    public function languageMeetups()
    {
        return Language::where('id', 27)->with('meetups')->get();
    }
}

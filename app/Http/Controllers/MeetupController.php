<?php

namespace App\Http\Controllers;

use App\Models\Meetup;
use App\Models\Language;
use App\Models\MeetupLanguage;
use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MeetupController extends Controller
{
    public function index()
    {
        return Inertia::render('Meetups/Meetups', [
            'meetupsList' => Meetup::with('languages')->get(),
            'countries' => Country::all(),
            'languages' => Language::all(),
        ]);
    }

    public function newMeetup()
    {
        return Inertia::render('Meetups/CreateMeetup', [
            'countries' => Country::all(),
            'csrf_token' => csrf_token(),
        ]);
    }

    public function chooseLanguages()
    {
        return Inertia::render('Meetups/AddLanguages', [
            'languages' => Language::all(),
            'csrf_token' => csrf_token(),
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

    public function addLanguages(Request $request)
    {
        try {
            $selectedLanguages = $request->input('language_id', []);
            $lastMeetupId = Meetup::latest('id')->first()->id;
            foreach ($selectedLanguages as $languageId) {
                MeetupLanguage::create([
                    'meetup_id' => $lastMeetupId,
                    'language_id' => $languageId,
                ]);
            }
            return redirect()->route('user.meetups')->with('success', 'Languages added successfully');
        } catch (\Exception $e) {
            return redirect()->route('choose.languages')->with('error', 'Failed to add languages');
        }
    }

    public function userMeetups()
    {
        $userId = auth()->user()->id;
        return Inertia::render('Meetups/UserMeetups', [
            'user_meetups' => Meetup::where('user_id', $userId)->get(),
        ]);
    }

    public function singleMeetup($id)
    {
        return Inertia::render('Meetups/SingleMeetup', [
            'meetup' => Meetup::with('languages')->get()->find($id),
        ]);
    }
}

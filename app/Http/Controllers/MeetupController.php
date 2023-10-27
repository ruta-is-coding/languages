<?php

namespace App\Http\Controllers;

use App\Models\Meetup;
use App\Models\Language;
use App\Models\MeetupLanguage;
use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Session;

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

    public function create()
    {
        return Inertia::render('Meetups/CreateMeetup', [
            'countries' => Country::all(),
            'csrf_token' => csrf_token(),
        ]);
    }

    public function store(Request $request)
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
            return Inertia::render('Meetups/CreateMeetup', [
                'error' => 'Failed to upload the meetup. Please try again.',
                'countries' => Country::all(),
                'csrf_token' => csrf_token(),
            ]);
        }
    }
    public function chooseLanguages()
    {
        return Inertia::render('Meetups/AddLanguages', [
            'languages' => Language::all(),
            'csrf_token' => csrf_token(),
        ]);
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

    public function destroy($id)
    {
        $meetup = Meetup::find($id);
        if (!$meetup) {
            return response()->json(['message' => 'Meetup not found'], 404);
        }
        $meetup->delete();
        return redirect()->route('user.meetups')->with('success', 'Meetup deleted successfully');
    }

    public function userMeetups()
    {
        $userId = auth()->user()->id;
        return Inertia::render('Meetups/UserMeetups', [
            'user_meetups' => Meetup::where('user_id', $userId)->get(),
            'csrf_token' => csrf_token()
        ]);
    }

    public function edit($id)
    {
        return Inertia::render('Meetups/EditMeetup', [
            'countries' => Country::all(),
            'meetup' => Meetup::where('id', $id)->get(),
            'csrf_token' => csrf_token(),
            'id' => $id,
        ]);
    }

    public function update(Request $request)
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
            $validated['user_id'] = auth()->user()->id;
            $meetup = Meetup::find($request->id);
            if ($request->hasFile('photo')) {
                if ($meetup->photo) {
                    Storage::disk('public')->delete($meetup->photo);
                }

                $validated['photo'] = $request->file('photo')->store('meetupPhotos', 'public');
            }

            $meetup->update($validated);

            return redirect()->route('user.meetups')->with('success', 'Meetup updated successfully');
        } catch (\Exception $e) {
            return redirect()->route('user.meetups')->with('error', 'Failed to update the meetup');
        }
    }

    public function singleMeetup($id)
    {
        return Inertia::render('Meetups/SingleMeetup', [
            'meetup' => Meetup::with('languages')->get()->find($id),
        ]);
    }
}

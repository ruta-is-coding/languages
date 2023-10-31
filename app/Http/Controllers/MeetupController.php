<?php

namespace App\Http\Controllers;

use App\Models\Meetup;
use App\Models\Language;
use App\Models\MeetupLanguage;
use App\Models\MeetupParticipant;
use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class MeetupController extends Controller
{
    //Display all meetups
    public function index()
    {
        return Inertia::render('Meetups/Meetups', [
            'meetupsList' => Meetup::with('languages')->get(),
            'countries' => Country::all(),
            'languages' => Language::all(),
        ]);
    }

    //Create form
    public function create()
    {
        return Inertia::render('Meetups/CreateMeetup', [
            'countries' => Country::all(),
            'csrf_token' => csrf_token(),
        ]);
    }

    //Create a meetup
    public function store(Request $request)
    {
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
        return redirect()->route('choose.languages')->with('message', 'Meetup created successfully');
    }

    // Choose meetup languages
    public function chooseLanguages()
    {
        return Inertia::render('Meetups/AddLanguages', [
            'languages' => Language::all(),
            'csrf_token' => csrf_token(),
        ]);
    }

    //Add meetup languages
    public function addLanguages(Request $request)
    {
        $selectedLanguages = $request->input('language_id', []);
        $lastMeetupId = Meetup::latest('id')->first()->id;
        foreach ($selectedLanguages as $languageId) {
            MeetupLanguage::create([
                'meetup_id' => $lastMeetupId,
                'language_id' => $languageId,
            ]);
        }
        return redirect()->route('user.meetups')->with('message', 'Language/s added successfully');
    }

    //Delete a meetup
    public function destroy($id)
    {
        $meetup = Meetup::find($id);
        if (!$meetup) {
            return response()->json(['message' => 'Meetup not found'], 404);
        }
        $meetup->delete();
        return redirect()->route('user.meetups')->with('message', 'Meetup deleted successfully');
    }

    // All user meetups
    public function userMeetups()
    {
        $id = auth()->user()->id;
        return Inertia::render('Meetups/UserMeetups', [
            'user_meetups' => Meetup::where('user_id', $id)->get(),
            'csrf_token' => csrf_token()
        ]);
    }

    //Edit form
    public function edit($id)
    {
        return Inertia::render('Meetups/EditMeetup', [
            'countries' => Country::all(),
            'meetup' => Meetup::where('id', $id)->get(),
            'csrf_token' => csrf_token(),
            'id' => $id,
        ]);
    }

    // Update a meetup
    public function update(Request $request)
    {
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
        return redirect()->route('user.meetups')->with('message', 'Meetup updated successfully');
    }

    // Meetup info
    public function info($id)
    {
        $user = Meetup::find($id)->user;
        return Inertia::render('Meetups/SingleMeetup', [
            'meetup' => Meetup::with('languages')->get()->find($id),
            'email' => $user->email,
            'username' => $user->name,
        ]);
    }

    public function registration($id)
    {
        $meetup = Meetup::find($id);
        return Inertia::render('Meetups/Registration', [
            'meetup' => $meetup,
            'csrf_token' => csrf_token(),
        ]);
    }
    public function register(Request $request, $id)
    {
        $validated = $request->validate([
            'full_name' => 'required|min:5|max:200',
            'email' => 'required|min:3|max:200',
        ]);
        $validated['meetup_id'] = $id;
        MeetupParticipant::create($validated);
        return redirect()->route('meetups')->with('message', 'You have registered successfully');
    }
}

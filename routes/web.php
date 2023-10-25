<?php

use App\Http\Controllers\ProfileController as P;
use App\Http\Controllers\MeetupController as M;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Web Routes

Route::get('/meetups', [M::class, 'index'])->name('meetups');
Route::get('/meetups/{id}', [M::class, 'singleMeetup']);
Route::get('/meetuplanguages', [M::class, 'meetupLanguages']);
Route::get('/languagemeetups', [M::class, 'languageMeetups']);
Route::inertia('/about', 'About')->name('about');
Route::inertia('/contact', 'Contact')->name('contact');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Authentificated routes (only for logged-in user)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [P::class, 'edit'])->name('profile.edit');
    Route::get('/meetups/create', [M::class, 'newMeetup'])->name('meetup.new');
    Route::post('/meetups/create', [M::class, 'createMeetup'])->name('meetup.create');
    Route::get('/meetups/create/add-languages', [M::class, 'addLanguages'])->name('add.languages');
    Route::get('/my-meetups', [M::class, 'userMeetups'])->name('userMeetups');
    Route::patch('/profile', [P::class, 'update'])->name('profile.update');
    Route::delete('/profile', [P::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

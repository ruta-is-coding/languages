<?php

use App\Http\Controllers\ProfileController as P;
use App\Http\Controllers\MeetupController as M;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Web Routes

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::prefix('/meetups')->group(function () {
    Route::get('/', [M::class, 'index']);
    Route::get('/{id}', [M::class, 'singleMeetup']);
});
Route::inertia('/about', 'About')->name('about');
Route::inertia('/contact', 'Contact')->name('contact');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Authentificated routes (only for logged-in user)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [P::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [P::class, 'update'])->name('profile.update');
    Route::delete('/profile', [P::class, 'destroy'])->name('profile.destroy');
    Route::prefix('/meetup/create')->group(function () {
        Route::get('/', [M::class, 'create'])->name('meetup.new');
        Route::post('/', [M::class, 'store'])->name('meetup.create');
        Route::get('/add-languages', [M::class, 'chooseLanguages'])->name('choose.languages');
        Route::post('/add-languages', [M::class, 'addLanguages'])->name('add.languages');
    });
    Route::get('/my-meetups', [M::class, 'userMeetups'])->name('user.meetups');
    Route::get('/my-meetups/edit/{id}', [M::class, 'edit'])->name('edit');
    Route::post('/my-meetups/edit/{id}', [M::class, 'update'])->name('update');
    Route::delete('/my-meetups/delete/{id}', [M::class, 'destroy'])->name('destroy');
});

require __DIR__ . '/auth.php';

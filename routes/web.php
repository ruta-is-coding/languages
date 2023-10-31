<?php

use App\Http\Controllers\ProfileController as P;
use App\Http\Controllers\MeetupController as M;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public routes
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');
Route::prefix('/meetups')->group(function () {
    Route::get('/', [M::class, 'index'])->name('meetups');
    Route::get('/{id}', [M::class, 'info'])->name('meetup.info');
    Route::get('/{id}/register', [M::class, 'registration'])->name('registration');
    Route::post('/{id}/register', [M::class, 'register'])->name('register');
});
Route::inertia('/about', 'About')->name('about');
Route::inertia('/contact', 'Contact')->name('contact');


// Authentificated routes (only for logged-in user)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [P::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [P::class, 'update'])->name('profile.update');
    Route::delete('/profile', [P::class, 'destroy'])->name('profile.destroy');
    // Create a meetup and add languages
    Route::prefix('/meetup/create')->group(function () {
        Route::get('/', [M::class, 'create'])->name('meetup.new');
        Route::post('/', [M::class, 'store'])->name('meetup.create');
        Route::get('/add-languages', [M::class, 'chooseLanguages'])->name('choose.languages');
        Route::post('/add-languages', [M::class, 'addLanguages'])->name('add.languages');
    });
    // User meetup list
    Route::prefix('/my-meetups')->group(function () {
        Route::get('/', [M::class, 'userMeetups'])->name('user.meetups');
        Route::get('/edit/{id}', [M::class, 'edit'])->name('meetup.edit');
        Route::post('/edit/{id}', [M::class, 'update'])->name('meetup.update');
        Route::delete('/delete/{id}', [M::class, 'destroy'])->name('meetup.destroy');
    });
});

require __DIR__ . '/auth.php';

<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::resource('cars', 'CarController');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('houm');

// simple middleware
Route::get('/houm', function () {
    echo 'Welcome houm!';
})->middleware('my-home');

// simple middleware's redirect route
Route::get('/short-name', function () {
    echo 'Your name is shorter than 5 characters!';
    echo 'Therefore, You cannot go houm..';
});

// new action and a new template for it -- show first 10 cars from the DB
Route::get('cars', 'CarController@get10Cars');

// used this for inserting new rows directly into the Users table
Route::get('/hash', function () {
    echo Hash::make('aleksandar');
});

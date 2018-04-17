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

Route::get('/houm', function () {
    echo 'Welcome houm!';
})->middleware('my-home');

Route::get('/short-name', function () {
    echo 'Your name is shorter than 5 characters!';
    echo 'Therefore, You cannot go houm..';
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('houm');

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

Route::get('/', 'HomeController@index')->name('home');
Route::get('/api', 'HomeController@api');
Route::get('/submit', 'SubmitController@index')->name('submit');
Route::post('/submit', 'SubmitController@store');
Route::get('/cp', function(){ return redirect('/cp/manage'); });
Route::resource('/cp/manage', 'ManageEventsController');
Auth::routes();

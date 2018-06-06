<?php

namespace App\Http\Controllers;

use App\Event;

class HomeController extends Controller
{
    public function index()
    {
        return view('home', ['events' => Event::future()->simplePaginate(20)]);
    }

    public function api()
    {
        return Event::future()->get();
    }
}

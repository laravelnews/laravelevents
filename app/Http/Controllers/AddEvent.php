<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Event;

class AddEvent extends Controller
{
    public function index()
    {
        return view('add');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'url' => 'url',
            'price' => 'max:255',
            'location' => 'required',
            'starts_at' => 'required',
        ]);

        $event = Event::create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'url' => $validated['url'],
            'price' => $validated['price'],
            'location' => $validated['location'],
            'starts_at' => strtotime($validated['starts_at']),
        ]);

        return redirect('/')->withMessage('Event added to the to be approved queue.');
    }
}

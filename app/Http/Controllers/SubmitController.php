<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Event;

class SubmitController extends Controller
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
            'url' => 'required|url',
            'price' => 'max:255',
            'location' => 'required',
            'starts_at' => 'required',
            'image' => 'image|dimensions:min_width=700,min_height=350,max_width=700,max_height=350',
        ]);

        if ($request->has('image')) {
            $imgPath = $request->file('image')->store('public');
        }

        $event = Event::create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'url' => $validated['url'],
            'price' => $validated['price'],
            'location' => $validated['location'],
            'image' => (isset($imgPath)) ? basename($imgPath) : null,
            'starts_at' => strtotime($validated['starts_at']),
        ]);

        return redirect('/')->withMessage('Event added to the queue to be approved.');
    }
}

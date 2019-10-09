<?php

namespace App\Http\Controllers;

use App\Event;
use App\Mail\EventCreated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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
        ]);

        $event = Event::create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'url' => $validated['url'],
            'price' => $validated['price'],
            'location' => $validated['location'],
            'starts_at' => strtotime($validated['starts_at']),
        ]);

        Mail::to(config('mail.from.address'))->send(new EventCreated($event));

        return redirect('/')->withMessage('Event added to the queue to be approved.');
    }
}

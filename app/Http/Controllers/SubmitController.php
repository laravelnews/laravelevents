<?php

namespace App\Http\Controllers;

use App\Http\Resources\StubEventResource;
use App\Models\Event;
use App\Notifications\EventCreated;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class SubmitController extends Controller
{
    public function index()
    {
        return Inertia::render('Event/Create', [
            'event' => StubEventResource::make(collect([])),
        ]);
    }

    public function store()
    {
        $event = Event::create(Request::validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string', 'max:280'],
            'url' => ['required', 'url'],
            'price' => ['max:255'],
            'location' => ['required', 'max:255'],
            'starts_at' => ['required'],
        ]));

        Notification::route('mail', Config::get('mail.from.address'))
            ->notify(new EventCreated($event));

        return Redirect::route('home')->with('success', 'Event added to the queue to be approved.');
    }
}

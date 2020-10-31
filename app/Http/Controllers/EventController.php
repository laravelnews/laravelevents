<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Event;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index(Event $event)
    {
        return Inertia::render('Event/Index', [
            'event' => EventResource::make($event),
        ]);
    }
}

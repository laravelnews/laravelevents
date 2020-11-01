<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Event;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Index', [
                'events' => EventResource::collection(
                    Event::future()->paginate(20)
                ),
            ]);
    }
}

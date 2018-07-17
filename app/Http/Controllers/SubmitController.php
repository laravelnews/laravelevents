<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use App\Event;
use App\Mail\EventCreated;
use UploadCare;

class SubmitController extends Controller
{
    public function index()
    {
        return view('add');
    }

    public function store(Request $request)
    {
        if ($request->has('image')) {
            try {
                $image = UploadCare::api()->getFile($request->image);
                $imgPath = $image->resize(1400, 700)->getUrl();
            } catch (\Throwable $e) {
                $imgPath = null;
            }
        }

        $validated = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'url' => 'required|url',
            'price' => 'max:255',
            'location' => 'required',
            'starts_at' => 'required',
        ]);

        if ($imgPath) {
            $image->store();
        }

        $event = Event::create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'url' => $validated['url'],
            'price' => $validated['price'],
            'location' => $validated['location'],
            'image' => $imgPath,
            'starts_at' => strtotime($validated['starts_at']),
        ]);
        
        Mail::to(config('mail.from.address'))->send(new EventCreated($event));
        
        return redirect('/')->withMessage('Event added to the queue to be approved.');
    }
}

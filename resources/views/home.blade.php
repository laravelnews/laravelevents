@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        @foreach ($events as $event)
        <div class="col-lg-8 col-md-12 m-3">
            <div class="rounded card m-6 p-4 bg-white entry">
                @if ($event->image)
                <a href="{{ $event->url }}" class="image">
                    <div class="date">
                        @svg('calendar')
                        {{ $event->starts_at->format("M d, Y") }}
                    </div>
                    <img src="{{ $event->image }}" alt="" style="margin-bottom: 20px;">
                </a>
                @endif
                <h2><a href="{{ $event->url }}">{{ $event->title }}</a></h2>
                <p>{{ $event->description }}</p>
                <div class="footer d-flex justify-content-around">
                    <div>
                    @svg('location')
                    {{ $event->location }}
                    </div>
                    <div>
                    @svg('ticket') Price:
                    {{ $event->price }}
                    </div>
                    <div>
                        @svg('calendar')
                        {{ $event->starts_at->format("M d, Y") }}
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>
    <div class="row justify-content-center">
        {{ $events->links() }}
    </div>
</div>
@endsection

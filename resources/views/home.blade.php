@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        @foreach ($events as $event)
        <div class="col-lg-8 col-md-12 m-3">
            <div class="rounded card m-6 p-4 bg-white entry">
                <a href="/">
                    <img src="https://i1.wp.com/wp.laravel-news.com/wp-content/uploads/2015/01/laracon-venue-2015.png?resize=733%2C375" alt="" style="margin-bottom: 20px;">
                </a>
                <h2><a href="/">{{ $event->title }}</a></h2>
                <p>{{ $event->description }}</p>
                <div class="footer d-flex justify-content-around">
                    <div>
                    @svg('calendar')
                    {{ $event->starts_at->format("M d, Y") }}
                    </div>
                    <div>
                    @svg('location')
                    {{ $event->location }}
                    </div>
                    <div>
                    @svg('ticket') Price:
                    {{ $event->price }}
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

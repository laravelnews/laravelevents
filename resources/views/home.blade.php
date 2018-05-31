@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        @foreach ($events as $event)
        <div class="col-md-8 col-sm-12 m-3">
            <div class="rounded card m-6 p-4 bg-white entry">
                <img src="https://i2.wp.com/wp.laravel-news.com/wp-content/uploads/2015/04/louisville.jpg?resize=733%2C375" alt="" style="margin-bottom: 20px;">
                <date>{{ $event->starts_at->format("M d, Y") }}</date>
                <h3>{{ $event->title }}</h3>
                <p>{{ $event->description }}</p>
                <div class="text-xs">
                    @svg('location')
                    {{ $event->location }}
                    <span style="margin: 0 10px;">
                    @svg('ticket') Price:
                    {{ $event->price }}
                    </span>
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

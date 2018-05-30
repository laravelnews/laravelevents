@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        @foreach ($events as $event)
        <div class="col-md-8 m-3">
            <div class="rounded shadow m-6 p-4 bg-white">
                <h3>{{ $event->title }}</h3>
                <p>{{ $event->description }}</p>
                <div class="text-xs">
                    {{ $event->starts_at->format("M d, Y") }} in
                    {{ $event->location }}
                </div>
            </div>
        </div>
        @endforeach
    </div>
        <div class="rounded shadow m-6 p-4 bg-white">
            {{ $events->links() }}
        </div>
</div>
@endsection

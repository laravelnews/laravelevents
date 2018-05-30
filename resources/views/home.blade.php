@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        @foreach ($events as $event)
        <div class="col-md-8 m-3">
            <div class="rounded shadow m-6 p-4 bg-white">
                <h3>{{ $event->title }} - <span class="small">{{ $event->starts_at->format("M d, Y") }}</span></h3>
                <p>{{ $event->description }}</p>
                <div class="text-xs">
                    {{ $event->location }} /
                    {{ $event->price }}
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

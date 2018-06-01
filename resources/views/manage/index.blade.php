@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-sm-12 m-3 p-4 bg-white">
            <h3>Pending Events</h3>
            @foreach ($pending as $event)
                <li>{{ $event->title }}</li>
            @endforeach
        </div>

    </div>
</div>
@endsection

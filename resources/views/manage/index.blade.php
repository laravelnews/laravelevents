@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-sm-12 m-3 p-4 bg-white">
            <h3>Pending Events</h3>
            <table class="table table-striped">
                @foreach ($pending as $event)
                <tr>
                    <td>{{ $event->title }}</td>
                    <td>{{ $event->starts_at->format("M d, Y") }}</td>
                    <td>{{ $event->location }}</td>
                    <td>{{ $event->price }}</td>
                </tr>
                <tr>
                    <td colspan="4">{{ $event->description }}</td>
                </tr>
                @endforeach
            </table>
            </div>
    </div>
</div>
@endsection

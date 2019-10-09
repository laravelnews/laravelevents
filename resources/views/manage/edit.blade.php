@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-md-12 m-3">
                <div class="rounded card m-6 p-4 bg-white entry">
                    <form method="post" action="/cp/manage/{{ $event->id }}" enctype="multipart/form-data">
                        {{ method_field('PUT') }}
                        {{ csrf_field() }}
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif

                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" name="title" id="title" placeholder="Event Title" value="{{ old('title', $event->title) }}">
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea name="description" id="description" cols="30" rows="10" class="form-control">{{ old('description', $event->description) }}</textarea>
                        </div>
                        <div class="form-group">
                            <label for="starts_at">Event Date</label>
                            <input type="text" class="form-control" id="starts_at" name="starts_at" placeholder="{{ date("Y-m-d") }}" value="{{ old('starts_at', $event->starts_at->format("Y-m-d")) }}">
                        </div>
                        <div class="form-group">
                            <label for="price">Ticket Price</label>
                            <input type="text" class="form-control" id="price" name="price" placeholder="Free, $19.99, etc." value="{{ old('price', $event->price) }}">
                        </div>
                        <div class="form-group">
                            <label for="location">Location</label>
                            <input type="text" class="form-control" id="location" name="location" placeholder="Paris, France"  value="{{ old('location', $event->location) }}">
                        </div>
                        <div class="form-group">
                            <label for="url">URL</label>
                            <input type="text" class="form-control" id="url" name="url" placeholder="https://"  value="{{ old('url', $event->url) }}">
                        </div>
                        <div class="form-group">
                            <label for="approved">Approved</label>
                            <select name="approved" id="approved" class="form-control">
                                <option value="1" {{ $event->approved === 1 ? 'selected' : '' }}>Yes</option>
                                <option value="0" {{ $event->approved !== 1 ? 'selected' : '' }}>No</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('footer-scripts')
@endsection

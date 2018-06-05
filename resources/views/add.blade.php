@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-8 col-md-12 m-3">
            <div class="rounded card m-6 p-4 bg-white entry">
                <form method="post" action="/submit" enctype="multipart/form-data">
                    {{ csrf_field() }}
                    <h2 class="text-center mb-4">Add Your Laravel Event</h2>
                    <div class="alert alert-warning" role="alert">
                        <b>Note:</b> All submissions must be manually approved before they appear on the site. This can take a few days, please have patience.
                    </div>

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
                        <label for="title">* Title</label>
                        <input type="text" class="form-control" name="title" id="title" placeholder="Event Title" value="{{ old('title') }}">
                    </div>
                    <div class="form-group">
                        <label for="description">* Description</label>
                        <textarea name="description" id="description" cols="30" rows="10" class="form-control">{{ old('description') }}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="starts_at">* Event Date</label>
                        <input type="text" class="form-control" id="starts_at" name="starts_at" placeholder="{{ date("Y-m-d") }}" value="{{ old('starts_at', date("Y-m-d")) }}">
                    </div>
                    <div class="form-group">
                        <label for="price">* Ticket Price</label>
                        <input type="text" class="form-control" id="price" name="price" placeholder="Free, $19.99, etc." value="{{ old('price') }}">
                    </div>
                    <div class="form-group">
                        <label for="location">* Location</label>
                        <input type="text" class="form-control" id="location" name="location" placeholder="Paris, France"  value="{{ old('location') }}">
                    </div>
                    <div class="form-group">
                        <label for="url">* URL</label>
                        <input type="text" class="form-control" id="url" name="url" placeholder="https://"  value="{{ old('url') }}">
                    </div>
                    <div class="form-group">
                        <label for="image">Image</label>
                        <input type="file" class="form-control" id="image" name="image" placeholder="700x350">
                        <small id="emailHelp" class="form-text text-muted">Must be exactly 700x350 pixels. Leave this empty and we will create it for you.</small>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection

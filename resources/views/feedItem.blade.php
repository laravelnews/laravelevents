@if ($event->image)
    <img src="{{ $event->fullimage }}" />
    <br />
@endif
<p>
    {!! nl2br($event->description) !!}
</p>
<p>
    Location: {{ $event->location }}
</p>
<p>
    Price: {{ $event->price }}
</p>
<p>
    Date: {{ $event->starts_at->format("M d, Y") }}
</p>

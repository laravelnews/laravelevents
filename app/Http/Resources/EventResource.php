<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'uuid' => $this->resource->uuid,
            'title' => $this->resource->title,
            'description' => $this->resource->description,
            'url' => $this->resource->url,
            'price' => $this->resource->price,
            'location' => $this->resource->location,
            'starts_at' => $this->resource->starts_at->toDateTimeString(),
            'starts_at_formatted' => $this->resource->starts_at->format('l, F dS'),
        ];
    }
}

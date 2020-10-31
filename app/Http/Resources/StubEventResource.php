<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class StubEventResource extends JsonResource
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
            'title' => null,
            'description' => null,
            'url' => null,
            'price' => null,
            'location' => null,
            'starts_at' => Carbon::now()->format('Y-m-d'),
        ];
    }
}

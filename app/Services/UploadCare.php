<?php

namespace App\Services;

use Uploadcare\Api;

class UploadCare
{
    protected $api;

    public function __construct()
    {
        $this->api = $api = new Api(config('uploadcare.key'), config('uploadcare.secret'));
    }

    public function api()
    {
        return $this->api;
    }
}

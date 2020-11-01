<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @return string|null
     */
    public function version(Request $request)
    {
        return md5_file(public_path('mix-manifest.json'));
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'app' => [
                'name' => Config::get('app.name'),
                'url' => Config::get('app.url'),
            ],
            'auth' => fn () => $request->user()
                ? $request->user()->only('id', 'name', 'email', 'avatar')
                : null,
            'flash' => fn () => Session::only(['success', 'error']),
        ]);
    }
}

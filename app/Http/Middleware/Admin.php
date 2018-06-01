<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (auth()->guest() or ! auth()->user()->isAdmin()) {
            if ($request->ajax()) {
                return $this->response->make('Unauthorized', 401);
            } else {
                return $this->response->redirectGuest('login');
            }
        }
        return $next($request);
    }
}

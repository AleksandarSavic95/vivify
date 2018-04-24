<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class HomeMiddleware
{
    /**
     * Handle an incoming request.
     * 
     * If the user is not logged in, return him to home.
     * If he is, but his name is shorter than 5 chars, redirect him to /short-name
     * If he is logged in and has a 5+ chars name, let him through :)
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check()) {
            if (strlen(Auth::user()->name) > 5) {
                \Log::info('\nlogging from HomeMiddleware\n');
                return $next($request);
            }
            return redirect('/short-name');
        }
        return redirect('/home');
    }
}

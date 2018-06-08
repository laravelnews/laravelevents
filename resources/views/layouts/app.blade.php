<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="{{ mix('js/app.js') }}" defer></script>
    <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6559534/6834192/css/fonts.css" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li>
                                <a class="nav-link button" href="{{ route('submit') }}">
                                    @icon('date-add')
                                    Submit an Event
                                </a>
                            </li>
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('submit') }}">
                                        Submit an Event
                                    </a>
                                    <a class="dropdown-item" href="/cp">
                                        Control Panel
                                    </a>
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @if (session('message'))
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-md-12 m-3">
                            <div class="alert alert-success">
                                {{ session('message') }}
                            </div>
                        </div>
                    </div>
                </div>
            @endif
            @yield('content')
        </main>
    </div>
    <footer style="background: #525252; padding: 40px;">
        <div class="text-center">
            <img src="https://laravel-news.com/assets/images/min/dark-ln-elephant.png">
            <ol class="footer__nav">
                <li><a href="https://laravel-news.com/">Laravel News</a></li>
                <li><a href="https://laravel.io/">Laravel.io</a></li>
                <li><a href="https://larajobs.com/">Laravel Jobs</a></li>
                <li><a href="https://laravel-news.com/newsletter">Laravel Newsletter</a></li>
            </ol>
            <p>© {{ date("Y") }} <a href="/">Laravel Events</a> — By <a href="https://ericlbarnes.com">Eric L. Barnes</a> - A division of dotdev inc.</p>
        </div>
    </footer>
    @if (config('app.env') == 'production')
        <script src="//static.getclicky.com/js" type="text/javascript"></script>
        <script type="text/javascript">try{ clicky.init(101121769); }catch(e){}</script>
        <noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101121769ns.gif" /></p></noscript>
    @endif
</body>
</html>

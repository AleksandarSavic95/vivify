<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    
    <script src="{{ asset('js/task11/b4Task11.js') }}" defer></script>
    <script src="{{ asset('js/task11/task11.js') }}" defer></script>
    <script src="{{ asset('js/task11/afterTask11.js') }}" defer></script>

    <script src="{{ asset('js/task12/objects.js') }}" defer></script>
    <script src="{{ asset('js/task12/person.js') }}" defer></script>

    <!-- <script src="{{ asset('js/task13-zdravstvena/test.js') }}" defer></script> -->
    <script src="{{ asset('js/task13-zdravstvena/bundle.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        @include('layouts.header')

        <main class="py-4">
            @yield('content')
        </main>
        <script defer="defer">
            var script = 'script';
            console.log('~~~ script ~~~');
            // console.log(b4); // ReferenceError
            // console.log(anon); // ReferenceError
            // console.log(after); // ReferenceError
            // console.log(out); // ReferenceError
            console.log(script);
            console.log('~~~ /script ~~~');
        </script>
    </div>
    @include('layouts.footer')
</body>
</html>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">

     <title>{{ config('app.name') }}</title>

     <!-- Fonts -->
     <link rel="stylesheet" href="https://rsms.me/inter/inter.css">

     <link rel="stylesheet" href="{{ mix('css/app.css') }}">


     @routes
</head>

<body class="">
     <div class="font-sans bg-gray-100 h-screen pt-10">
          @inertia
     </div>


     <script src="{{ mix('js/app.js') }}" defer></script>

     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
     <link rel="stylesheet" href="https://npmcdn.com/flatpickr/dist/themes/airbnb.css">

</body>

</html>
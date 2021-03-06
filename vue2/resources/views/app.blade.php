<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1,viewport-fit=cover">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name') }}</title>
    <script src="{{ mix('js/app.js') }}" defer></script>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>

<body class="text-gray-300 bg-gray-900">
    <div id="app"></div>
</body>

</html>

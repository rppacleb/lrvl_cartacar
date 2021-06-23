<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Cart a car</title>
        <link rel="icon" href="{{ asset('images/icon.png') }}" />
        
    </head>
    <body style="margin: 0px">
        {{session()->get('uclient')['id']}}
        @if (Session::has('uclient'))
            <div id="uroot"></div>
        @elseif (session::has('aclient'))
            <div id="uroot"></div>
        @else
            <style> html, body { height: 100% } </style>
            <div id="auth" style="height: 100%"></div>
        @endif

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>

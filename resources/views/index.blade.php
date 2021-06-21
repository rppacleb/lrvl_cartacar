<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Cart a car</title>
        
    </head>
    <body style="margin: 0px">
        @if (session()->has('uclient'))
            <div id="uroot"></div>
        @elseif (session()->has('aclient'))
            <div id="aroot"></div>
        @else
            <style> html, body { height: 100% } </style>
            <div id="auth" style="height: 100%"></div>
        @endif

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
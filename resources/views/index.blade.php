<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Cart a car</title>
        <link rel="icon" href="{{ asset('images/icon.png') }}" />
        
    </head>
    <body style="margin: 0px">
        @if (Session::has('aclient'))
            <div id="aroot" auth="{{ json_encode(session('aclient')) }}"></div>
        @elseif (Session::has('uclient'))
            <div id="uroot" auth="{{ json_encode(session('uclient')) }}"></div>
        @else
            <style> html, body { height: 100% } </style>
            <div id="auth" style="height: 100%"></div>
        @endif

        <script src="https://www.paypal.com/sdk/js?client-id=AZdXM4NVW7p1UtAeBqC5x4IrJPCP3-Tim0WpWseNuMSpjNd3abNNXS5Aq2_63cFK3JGboJIIoDUwc3Ne&currency=PHP&disable-funding=credit,card&vault=true"></script>
        {{-- <script src="https://www.paypal.com/sdk/js?client-id=AZdXM4NVW7p1UtAeBqC5x4IrJPCP3-Tim0WpWseNuMSpjNd3abNNXS5Aq2_63cFK3JGboJIIoDUwc3Ne&currency=PHP"></script> --}}
        {{-- <script src="https://www.paypal.com/sdk/js?client-id=AQkVYfVuFEHmkRdr8kO1gaSUWUq4jIxURhcw-RMebVd4khIfJ12GczK4i2cy4B-Qzh0dAcqKzGGDhsUR&currency=PHP&disable-funding=credit,card&vault=true"></script> --}}
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>

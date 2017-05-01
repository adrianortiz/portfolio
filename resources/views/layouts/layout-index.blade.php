<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title', 'Codizer')</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="{{ asset('js/slick/slick.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('js/slick/slick-theme.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/index.min.css') }}">

        @yield('extra-css')

    </head>
    <body>

        <header>
            <a href="http://codizer.com/" class="logo-codizer">
                <h1 class="font-weight-600">Codizer</h1>
                <span class="logo-bar"></span>
                <h1 class="font-weight-300">Dev</h1>
            </a>
            <ul>
                <li><a href="http://codizer.com/" class="font-weight-600 txt-portafolio">Port<span class="font-weight-300">folio</span></a></li>
                <li><a href="https://www.pinterest.com/codizerdev/portafolio/" class="font-weight-600 txt-view">View all</a></li>
            </ul>
        </header>

        @yield('content')

        <footer>
            <div class="footer-number-count">
                <h3>01</h3>
            </div>
            <div class="footer-menu">
                <ul>
                    <li><a href="https://www.linkedin.com/in/adrianortizmartinez/">linkedin</a></li>
                    <li><a href="https://www.pinterest.com/codizerdev/portafolio/">pinterest</a></li>
                    <li><a href="https://www.facebook.com/CodizerSoftware/">facebook</a></li>
                </ul>
                <a href="http://codizer.com/">codizer 2017 <span></span></a>
            </div>
            
        </footer>

        <script type="text/javascript" src="{{ asset('js/jquery.min.js')}}"></script>
        <script type="text/javascript" src="{{ asset('js/slick/slick.min.js') }}"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
        <script type="text/javascript" src="{{ asset('js/atv/atvImg-min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/index.js') }}"></script>
        @yield('extra-js')
        
    </body>
</html>

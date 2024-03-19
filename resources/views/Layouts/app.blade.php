<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('titulo')</title>
         @vite(['resources/js/app.js','resources/css/app.css'])
    </head>
    <body>
       <div id="app">
       <nav-component></nav-component>
       <div class="m-5 p-5">
       @yield('contenido')
       </div>
       </div>
    </body>
</html>

function existe_cookies() {
    if (sessionStorage.getItem("cookies")) {
        document.getElementById('cookies').style.cssText = 'visibility : hidden;';
    } else {
        document.getElementById('cookies').style.cssText = 'visibility : visible;';
    }
}

function ocultar_cookies() {
    if (sessionStorage.getItem("cookies")) {
        document.getElementById('cookies').style.cssText = 'visibility : hidden;';
    } else {
        document.getElementById('cookies').style.cssText = 'visibility : visible;';
        sessionStorage.setItem('cookies', 'false');
    }
}

$(document).ready(function () {
    var SliderModule = (function () {
        var pb = {}; //Creamos un objeto

        //Almacenamos nuestro slider en el atributo elslider
        pb.elslider = $('#slider');

        //El atributo item es un array que almacena los paneles del slider
        pb.items = {
            panels: pb.elslider.find('.slider-wrapper>li'),
        }

        //Constructor del Slider
        pb.init = function (settings) {
            console.log("Inicializando");
            SliderInit(); //Para inicializar el slider
        }

        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;
        var imagen = 0;

        //Constructor del Slider
        pb.init = function (settings) {
            var loscontroles = '';
            SliderInit(); //Para inicializar el slider

            $('.slider-wrapper').on('mouseenter', parar).on('mouseleave', reiniciar);

            //$('#control-buttons').html(loscontroles)
        }

        //Funcion que inicializar el slider
        var SliderInit = function () {
            SliderInterval = setInterval(pb.startSlider, 3000);
        }

        function parar() {
            clearInterval(SliderInterval)
        }

        function reiniciar() {
            SliderInterval = setInterval(pb.startSlider, 3000);
        }


        pb.startSlider = function () {
            var paneles = pb.items.panels
            var controles = $('#control-buttons img')
            //Controla que empiece por el primero
            if (nextSlider >= lengthSlider) {
                nextSlider = 0;
                currentSlider = lengthSlider - 1;
            }

            controles.removeClass('active')
            controles.eq(nextSlider).addClass('active')

            paneles.eq(currentSlider).fadeOut('slow')
            paneles.eq(nextSlider).fadeIn('slow')

            currentSlider = nextSlider;
            nextSlider += 1
        }

        return pb; //Devolvemos el objeto pb
    }()); //()) es para que se ejecute automáticamente 
    SliderModule.init();

    /*Abre y oculta el menu de la cesta de compra.
    Si esta abierto el menu normal, se cierra*/
    $('#bolsaCompra').click(function () {
        $('#menu_oculto_bolsa').css('right', '0')
        $('header div#menu input').prop('checked', false)
    })

    $('#cerrar_bolsa').click(function () {
        $('#menu_oculto_bolsa').css('right', '-100%')
    })

    $('#icono_cerrar_bolsa').click(function () {
        $('#menu_oculto_bolsa').css('right', '-100%')
    })

    $('#menu').click(function () {
        $('#menu_oculto_bolsa').css('right', '-100%')
    })

    //Esta variable servirá para controlar la página en
    //la que el cliente se encuentra navegando en todo
    //momento
    var pathname = window.location.pathname;
    
    /*Al clicar sobre el botón 'Comprar' del menu desplegable
    lleva a la primera pagina del proceso de compra'*/
    $('#comprar_desde_menu').click(function () {
        if (pathname == '/index.html') {
            $(window).attr('location', 'pages/proceso_compra.html')
        }else{
            $(window).attr('location', 'proceso_compra.html')
        }
    })

    $('#ver_carrito').click(function () {
        if (pathname == '/index.html') {
            $(window).attr('location', 'pages/carrito.html')
        }else{
            $(window).attr('location', 'carrito.html')
        }
    })

    $('#continuar_envios').click(function(){
        $(window).attr('location', 'datos_envio.html')
    })

    $('#volver_inicio').click(function(){
        $(window).attr('location', '../index.html')
    })

    $('#volver_informacion').click(function(){
        $(window).attr('location', 'proceso_compra.html')
    })

    $('#cambiar_datos').click(function(){
        $(window).attr('location', 'proceso_compra.html')
    })

    $('#continuar_pagos').click(function(){
        $(window).attr('location', 'datos_pagar.html')
    })

    $('#pagar').click(function(){
        //AVISO DE QUE HA COMPRADO
        $(window).attr('location', 'https://www.paypal.com/es/home')
    })

    $('#volver_envios').click(function(){
        $(window).attr('location', 'datos_envio.html')
    })

    $('#continuar_comprando').click(function(){
        $(window).attr('location', '../index.html')
    })

    $('#comprar_desde_cesta').click(function(){
        $(window).attr('location', 'proceso_compra.html')
    })

    $('div#contenedor_mas_vendidos picture img').click(function(){
        $(window).attr('location', 'pagina_producto.html')
    })

    $('#productos_menu_query').click(function () {
        if (pathname == '/index.html') {
            $(window).attr('location', 'pages/productos.html')
        }else{
            $(window).attr('location', 'productos.html')
        }
    })

    $('#personalizacion_menu_query').click(function () {
        if (pathname == '/index.html') {
            $(window).attr('location', 'pages/personalizacion.html')
        }else{
            $(window).attr('location', 'personalizacion.html')
        }
    })

    $('#aloju_menu_query').click(function () {
        if (pathname == '/index.html') {
            $(window).attr('location', 'pages/aloju.html')
        }else{
            $(window).attr('location', 'aloju.html')
        }
    })

    $('#contactanos_menu_query').click(function () {
        if (pathname == '/index.html') {
            $(window).attr('location', 'pages/contacto.html')
        }else{
            $(window).attr('location', 'contacto.html')
        }
    })

    //Actualiza el número de caracteres restantes 
    var max_caracteres = 100;

    $('#restantes').html(max_caracteres);

    $('textarea#comentario').keypress(function () {
        var caracter = $(this).val().length;
        var diferencia = max_caracteres - caracter;
        $('#restantes').html(diferencia);
    });

});

//VIDEO
function play() {
    document.getElementById('contenedor').play();
}

function ocultar_play() {
    document.getElementById("start").style.cssText  = 'visibility: hidden;';
}

function mostrar_play() {
    document.getElementById("start").style.cssText  = 'visibility: visible;';
}

function pause() {
    document.getElementById('contenedor').pause();
}

function ocultar_pause() {
    document.getElementById("pause").style.cssText  = 'visibility: hidden;';
}

function mostrar_pause() {
    document.getElementById("pause").style.cssText  = 'visibility: visible;';
}

function stop() {
    document.getElementById('contenedor').pause();
    document.getElementById('contenedor').currentTime = 0;
}

function mute() {
    document.getElementById('contenedor').volume = 0;
}

function back() {
    document.getElementById('contenedor').currentTime -= 10;
}

function advance() {
    document.getElementById('contenedor').currentTime += 10;
}

function full_screen() {
    document.getElementById('contenedor').requestFullscreen();
}

function ocultar_volume() {
    document.getElementById("subir_volumen").style.cssText  = 'visibility: hidden;';
}

function mostrar_mute() {
    document.getElementById("mute").style.cssText  = 'visibility: visible;';
}

function ocultar_mute() {
    document.getElementById("mute").style.cssText  = 'visibility: hidden;';
}

function mostrar_volume() {
    document.getElementById("subir_volumen").style.cssText  = 'visibility: visible;';
}

function volume(){
    var level = document.getElementById('volume').value;
    console.log(level);
    document.getElementById('contenedor').volume = level / 10;

    if(document.getElementById('contenedor').volume == 0){
        ocultar_volume();
        mostrar_mute();
    }else{
        ocultar_mute();
        mostrar_volume();
    }
}

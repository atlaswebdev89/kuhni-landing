$(document).ready(function(){

    $(window).on('load', function() {
        //Preloader off
        $(".loader-wrap").delay(500).fadeOut("600");
        $("#overlay-loader").delay(500).fadeOut("600");
    });


    let owlKatalog = $('.owl-carousel-catalog');

    owlKatalog.owlCarousel({
        loop:false,
        margin:10,
        autoHeight: true,
        nav:true,
        items:1,
        autoplay: true,
        autoplayHoverPause: true,
        navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
        rewind: true,
        dots: true,
        dotsEach: true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            992:{
                items:3
            }
        }
    });

    /* JqueryLightGallery */
    let owl = $('.owl-carousel-catalog');
    $('.lightgallery').each(function (e) {
        $(this).lightGallery({
            thumbnail:true,
            animateThumb: true,
            showThumbByDefault: true,
            subHtmlSelectorRelative: false,
        });
        $(this).on('onBeforeOpen.lg', function (){
            owl.trigger('stop.owl.autoplay');
        })
        $(this).on('onCloseAfter.lg', function (){
            owl.trigger('play.owl.autoplay');
        })
    });

    /*******************************************************************************************************
     * Scroll To Top - Кнопка возврата к верху страницы, Кнопка появления кнопки фильтра в каталоге
     ********************************************************************************************************/

    var scrollTop = $(".wrap-button-top");
    $(window).on('scroll',function() {
        var topPos = $(this).scrollTop();
        if (topPos > 350) {
           scrollTop.fadeIn("2000");

        } else {
            scrollTop.fadeOut("2000");
        }
    });
    //Плавный переход к top page
    $(scrollTop).on('click',function() {
        $('html, body').animate({
            scrollTop: 0
        }, {
            duration: 1000,   // по умолчанию «400»
            easing: "swing" // по умолчанию «swing»
        });
        return false;
    });
    })

/* Modile Menu*/

        let burger_mobile = $('.js-mobile-toggle');
        let overlay_offcavnas = $('#overlay-menu');
        let owl = $('.owl-carousel');

        //Клик по burger открытия мобильного меню
        burger_mobile.on('click', function (e) {
                    e.preventDefault();
                    $(this).addClass('active');
                        overlay_offcavnas.fadeIn("1000");
                        // отключить скрол пока открыто мобильное меню
                        $('body').addClass('open-body');
                        //Открыть offcavnas меню
                        $('.mobile_menu_block').addClass('open_offcavnas');
                        //Отключить все карусели owl-carusel
                        owl.trigger('stop.owl.autoplay');
        })

        overlay_offcavnas.on('click', function () {
            $('.mobile_menu_block').removeClass('open_offcavnas');
            $('body').removeClass('open-body');
            overlay_offcavnas.fadeOut("1000");
            //Включить все карусели owl-carusel
            owl.trigger('play.owl.autoplay');
            burger_mobile.removeClass('active');
        })
//Закрытие мобильного меню
$('.closed-mobile-menu').on('click', function (e) {
    e.preventDefault();
    if (burger_mobile.hasClass('active')) {
        burger_mobile.removeClass('active');
        $('.mobile_menu_block').removeClass('open_offcavnas');
        $('body').removeClass('open-body');
        overlay_offcavnas.fadeOut("1000");
        //Включить все карусели owl-carusel
        owl.trigger('play.owl.autoplay');
    }
})

var siteMenuClone = function() {

    $('.js-clone-nav').each(function() {
        var $this = $(this);
        $this.clone().attr('class', 'site-nav-wrap').appendTo('.offcavnas-main-menu');
    });
    $('.js-clone-social').each(function () {
        var $this = $(this);
        $this.clone().appendTo('.offcavnas-social-menu');
    })


    setTimeout(function() {

        var counter = 0;
        $('.offcavnas-main-menu .has-children').each(function(){
            var $this = $(this);

            $this.prepend('<span class="arrow-collapse collapsed"><i class="fa fa-angle-up" aria-hidden="true"></i>');

            $this.find('.arrow-collapse').attr({
                'data-toggle' : 'collapse',
                'data-target' : '#collapseItem' + counter,
            });

            $this.find('> ul').attr({
                'class' : 'collapse',
                'id' : 'collapseItem' + counter,
            });
            counter++;
        });

    }, 1000);

    $('body').on('click', '.arrow-collapse', function(e) {
        var $this = $(this);
        if ( $this.closest('li').find('.collapse').hasClass('show') ) {
            $this.removeClass('active');
        } else {
            $this.closest('.site-nav-wrap').find('.has-children').each(function () {
                $(this).find('.arrow-collapse').removeClass('active').addClass('collapsed');
                $(this).find('.collapse').removeClass('show');
            });
            $this.addClass('active');
        }
        e.preventDefault();
    });
};
siteMenuClone();

/* ======= Плавное появление эелементов при скролле с помощью плагина WayPoint =========*/
var contentWayPoint = function() {
    var i = 0;
    $('.animate-box').waypoint( function( direction ) {
        if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
            i++;
            $(this).addClass('item-animate');
            setTimeout(function(){
                $('body .animate-box.item-animate').each(function(k){
                    var el = $(this);
                    setTimeout( function () {
                        var effect = el.data('animate-effect');
                        if ( effect === 'fadeIn') {
                            el.addClass('fadeIn animated');
                        } else if ( effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft animated');
                        } else if ( effect === 'fadeInRight') {
                            el.addClass('fadeInRight animated');
                        }else if ( effect === 'jackInTheBox') {
                            el.addClass('jackInTheBox animated');
                        } else {
                            el.addClass('fadeInUp animated');
                        }
                        el.removeClass('item-animate');
                    },  k * 200, 'easeInOutExpo' );
                });
            }, 100);
        }
    } , { offset: '80%' } );
};
contentWayPoint();
/* ========================== END ==============================*/
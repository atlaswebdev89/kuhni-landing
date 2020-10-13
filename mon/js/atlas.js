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
        }, 800);
        return false;
    });
    })

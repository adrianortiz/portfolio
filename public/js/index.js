/**
    Author: Adrian Ortiz

    Company: Codizer - 2017
    Type: Personal Portfolio
    website: www.codizer.com
**/


(function($) {
    var App = { init: function() {
        App.SliderIndex();
        App.ConfigMenuMobile();
    },
        SliderIndex: function() {

            var $status = $('.pagingInfo');
            var $slickElement = $('.index-slider');

            var $numberSlider = $('.footer-number-count h3');

            $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
                //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
                var i = (currentSlide ? currentSlide : 0) + 1;
                $status.text(i + '/' + slick.slideCount);
                $numberSlider.text("0" + i);
            });

            $slickElement.slick({
                autoplay: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false
                // adaptiveHeight: true
            });


        },

        ConfigMenuMobile: function() {

            // atvImg();

            /*
            $('#menu-a').click( function() {
                $('#header-menu').toggleClass('motrar-header');
            });

            $(window).resize( function() {
                $('#header-menu').removeClass('motrar-header');
            });
            */

        }
    };

    $(function(){
        App.init();
        $(window).resize();
    });

})(jQuery);
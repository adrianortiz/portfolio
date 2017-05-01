/**
    Author: Adrian Ortiz

    Company: Codizer - 2017
    Type: Personal Portfolio
    website: www.codizer.com
**/


(function($) {
    var App = { init: function() {
        App.SliderIndex();
        App.ModalMain();
        App.ImgPreview();
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
                arrows: false,
                dots: false
                // adaptiveHeight: true
            });
        },

        ModalMain: function() {

            $btnFull1 = $('.btn-full img').attr('icon-1');
            $btnFull2 = $('.btn-full img').attr('icon-2');

            $('.show-modal-btn').click( function() {
                var tl1 = new TimelineLite();
                tl1.to('.modal', 0, {display: 'inherit'}, 0.0)
                    .to('.modal', 0.3, {opacity: 1}, 0.0);

                $('.container').addClass('blur-effect');
                $('footer').addClass('blur-effect');
            });

            $('.btn-full').click(function() {
                // Enable mode modal dark
                $('header').toggleClass('dark-header');
                $('.modal').toggleClass('modal-dark');

                if ($('.btn-full img').attr('src') == $btnFull1 ) {
                    $('.btn-full img').attr('src', $btnFull2);
                } else {
                    $('.btn-full img').attr('src', $btnFull1);
                }
            });

            $('.btn-close').click( function() {
                $('.btn-full img').attr('src', $btnFull1);
                
                $('.container').removeClass('blur-effect');
                $('footer').removeClass('blur-effect');

                // Disable mode modal dark
                $('header').removeClass('dark-header');
                $('.modal').removeClass('modal-dark');

                var tl2 = new TimelineLite();
                tl2.to('.modal', 0, {opacity: 0}, 0.0)
                    .to('.modal', 0.3, {display: 'none'}, 0.0);

            });

        },

        ImgPreview: function() {

            $(".project-mini-img").on("click", "img", function () {

                $('.project-mini-img div').removeClass('mini-active');
                $('.project-full-img img').attr('src', $(this).attr('src'));
                $(this).parents('div').addClass('mini-active');
                
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
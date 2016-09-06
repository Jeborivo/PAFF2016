(function ($, Drupal, drupalSettings) {
    'use strict';

    Drupal.behaviors.sponsors = {
        attach: function(context, settings) {
            $('.sponsors-slideshow').slick({
                autoplay: true,
                cssEase: 'linear',

                infinite: true,
                speed: 300,
                variableWidth: true,
                slidesToShow: 3,
                center:true,
                arrows: false,
                centerMode: true
            });
        }
    };

    Drupal.behaviors.slider = {
        attach: function(context, settings) {

           $('.slider-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '.slider-slider-nav'
          });

          $('.slider-slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-slider-for',
            dots: false,
            focusOnSelect: true,
            infinite: true,
            prevArrow: '<a class="slick-prev"><i class="fa fa-angle-left fa-5x pull-left"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fa fa-angle-right fa-5x pull-right "></i></a>',
            swipe: true

          });
        }
    };

}(jQuery, Drupal, drupalSettings));

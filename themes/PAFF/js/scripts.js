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
                arrows: false,
                centerMode: true
            });
        }
    };

    Drupal.behaviors.slider = {
        attach: function(context, settings) {

           $('.slider-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 0,
            arrows: false,
            fade: false,
            asNavFor: '.slider-slider-nav'
          });-
          $('.slider-slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 2,
            asNavFor: '.slider-slider-for',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            infinite: true,
            prevArrow: false,
            nextArrow:false,
            swipe: true,
            slickPrev: false,
            slickNext: false,

          });
        }
    };

}(jQuery, Drupal, drupalSettings));

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
                slidesToShow: 5,
                arrows: false,
                centerMode: true
            });
        }
    };

    $('.news-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.news-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

}(jQuery, Drupal, drupalSettings));
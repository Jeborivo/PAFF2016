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


}(jQuery, Drupal, drupalSettings));

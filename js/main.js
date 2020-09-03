
jQuery(document).ready(function () {

  var owl, $searchlink, $searchbar, back, filterList ;
 /* Page Pre Loading */

    $(window).on('load', function () { // makes sure the whole site is loaded
        $('.pg-loader').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(250).fadeOut('slow'); // will fade out the white DIV that covers the website.
    });

    /* end Page Pre Loading */


/*Testimonial slider -Owl  Carousal*/
    $(".pg-testimonial-slider").owlCarousel({
        items: 2
        , loop: true
        , nav: false
        , responsive: {
            0: {
                items: 1
                , dots: true
            }
            , 800: {
                items: 2
                , dots: true
            }
        }
        , dots: false
        , autoplay: true
        , autoplayTimeout: 3000
        , autoplayHoverPause: true
    });
    /*end of Testimonialslider*/

/*Animations*/
  new WOW().init();

  });

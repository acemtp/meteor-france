(function ($) {
    "use strict";

    ///////////////////////////////////////////////////// Your
    var venueAddress = "Grand Place, 1000, Brussels"; // Venue
    /////////////////////////////////////////////////// Adress

    var fn = {

        // Launch Functions
        Launch: function () {
            fn.GoogleMaps();
            fn.MenuSticky();
            fn.MainSlider();
            fn.MainSliderAlign();
            fn.Navigation();
            fn.Carousel();
            fn.Slider();
            fn.RegisterForm();
            fn.SubscribeForm();
            fn.Apps();
        },



        // Google Maps
        GoogleMaps: function () {

            var markerInfo = "<h4>" + venueAddress + "</h4>";
            $("#map_canvas").gmap3({
                map: {
                    options: {
                        maxZoom: 15,
                        streetViewControl: false,
                        panControl: true,
                        panControlOptions: {
                            position: google.maps.ControlPosition.RIGHT_CENTER
                        },
                        zoomControl: true,
                        zoomControlOptions: {
                            style: google.maps.ZoomControlStyle.LARGE,
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        mapTypeControl: false

                    }
                },
                infowindow: {
                    address: venueAddress,
                    options: {
                        content: markerInfo
                    }
                },
                marker: {
                    address: venueAddress
                }
            },
                "autofit");
        },



        // Sticky Menu
        MenuSticky: function () {
            var menu = document.querySelector('#menu'),
                origOffsetY = menu.offsetTop + 100;
            function scroll() {
                if ($(window).scrollTop() >= origOffsetY) {
                    $('#menu').addClass('sticky');
                    $('#menu').removeClass('fixed');
                } else {
                    $('#menu').removeClass('sticky');
                    $('#menu').addClass('fixed');
                }
            }
            document.onscroll = scroll;
        },



        // Align Slider Horizontally
        MainSliderAlign: function () {
            var imageWidth, widthFix, container = $('.header-bg');
            function centerImage() {
                imageWidth = container.find('img').width();
                widthFix = imageWidth / 2;
                container.find('img').css('margin-left', -widthFix);
            }
            $(window).on("load resize", centerImage);
        },



        // Main FlexSlider
        MainSlider: function () {
            $(window).load(function () {
                $('.main-slider').flexslider({
                    noCSS: true,
                    touch: false,
                    controlNav: false,
                    directionNav: false,
                    animation: "fade",
                    start: function () {
                        $('#preloader').addClass('ready');
                    }
                });
            });
        },



        // One Page Navigation
        Navigation: function () {
            $('#menu').onePageNav({
                currentClass: 'current',
                scrollSpeed: 500,
                scrollOffset: 60,
                scrollThreshold: 0.2,
                easing: 'swing'
            });
        },



        // Owl Carousel
        Carousel: function () {
            var owl = $("#carousel");
            owl.owlCarousel({
                itemsCustom : [
                    [1200, 4],
                    [970, 3],
                    [768, 2],
                    [360, 1]
                ],
                navigation : false
            });

            $(".next").click(function () {
                owl.trigger('owl.next');
            });

            $(".prev").click(function () {
                owl.trigger('owl.prev');
            });
        },



        // FlexSlider
        Slider: function () {
            $('.flexslider').flexslider({
                noCSS: true,
                touch: false,
                directionNav: false,
                animation: "fade"
            });
        },



        // Registration Form
        RegisterForm: function () {
            $("#register-form").submit(function (e) {
                e.preventDefault();
                var name = $("#name").val(),
                    email = $("#email").val(),
                    telephone = $("#telephone").val(),
                    ticket = $("#ticket").val(),
                    dataString = 'name=' + name + '&email=' + email + '&telephone=' + telephone + '&ticket=' + ticket;
                function isValidEmail(emailAddress) {
                    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                    return pattern.test(emailAddress);
                }

                if (isValidEmail(email) && (name.length > 1)) {
                    $.ajax({
                        type: "POST",
                        url: "php/process.php",
                        data: dataString,
                        success: function () {
                            $('#register-form .form-notification').fadeIn(500);
                        }
                    });
                } else {
                    if (!isValidEmail(email)) {
                        $('input#email').addClass('not-valid');
                    } else {
                        $('input#email').removeClass('not-valid');
                    }
                    if (name.length === 0) {
                        $('input#name').addClass('not-valid');
                    } else {
                        $('input#name').removeClass('not-valid');
                    }
                }
                return false;
            });
        },


        // Subscribe Form
        SubscribeForm: function () {
            $("#subscribe-form").submit(function (e) {
                e.preventDefault();
                var subscriber = $("#subscriber").val(),
                    dataString = '&subscriber=' + subscriber;
                function isValidEmail(emailAddress) {
                    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                    return pattern.test(emailAddress);
                }

                if (isValidEmail(subscriber)) {
                    $.ajax({
                        type: "POST",
                        url: "php/process.php",
                        data: dataString,
                        success: function () {
                            $('#subscribe-form .form-notification').fadeIn(500);
                        }
                    });
                } else {
                    $('input#subscriber').addClass('not-valid');
                }
                return false;
            });
        },


        // Apps
        Apps: function () {

            // Accordion
            $('.accordion-group').accordion();

            // Go Top
            $('#gotop').click(function () {
                $('html, body').scrollTo($('#header'), 300);
            });

            // Go Register
            $('#goregister').click(function () {
                $('html, body').scrollTo($('#register'), 300);
            });

            // Placeholder for MailChimp Form
            $('#mce-EMAIL').attr('placeholder', 'Your email...');

            // Placeholder's for IE9
            $('input, textarea').placeholder();

            // Responsive Video's
            $(".video").fitVids();

            // Fancy Select
            $('#ticket').fancySelect();

        }


    };

    $(document).ready(function () {
        fn.Launch();
    });

})(jQuery);
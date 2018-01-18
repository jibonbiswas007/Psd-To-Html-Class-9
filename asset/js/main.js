(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
        $('.video-play-btn').magnificPopup({
            type: "iframe",
        });

        $('.count').counterUp({
            delay: 10,
            time: 2000
        });

        $('.our-courses').owlCarousel({
            loop:true,
            smartSpeed:2000,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });

        $('.map')
              .gmap3({
                center:[22.7898141,89.2546341],
                zoom:10,
                scrollwheel:false,
                mapTypeId: "shadeOfGrey", // to select it directly
                mapTypeControlOptions: {
                  mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
                }
              })
              .marker({
                      position: [22.7898141,89.2546341],
                      icon: 'http://maps.google.com/mapfiles/marker_green.png'
                    })
              .styledmaptype(
                "shadeOfGrey",
                [
                  {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#917B56"},{"lightness":10}]},
                  {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":20}]},
                  {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                  {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
                  {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
                  {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#FFFFFF"},{"lightness":20}]},
                  {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
                  {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ECECEC"},{"lightness":17}]},
                  {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ECECEC"},{"lightness":29},{"weight":0.2}]},
                  {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ECECEC"},{"lightness":18}]},
                  {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
                  {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
                  {"featureType":"water","elementType":"geometry","stylers":[{"color":"#C8D7D4"},{"lightness":17}]}
                ],
                {name: "Shades of Grey"}
        );
        
    });
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));
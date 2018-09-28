(function($) {
  "use strict";

  // PRE LOADER
  // $(window).load(function(){
  //   $('.preloader').delay(500).slideUp('slow'); // set duration in brackets
  // });

  // MENU
  $(".navbar-collapse a").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });

  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  //Carousel
  $(".carousel").carousel({
    interval: 5000
  });

  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    autoplay:true,
    autoplayTimeout: 5000,
    // autoplayHoverPause: true,
    autoplaySpeed: 1000,
    dots: true,
    margin:40,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1199:{
            items:3
        },
        1700:{
          items:4
      }
    }
});
// owl.on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY>0) {
//         owl.trigger('next.owl');
//     } else {
//         owl.trigger('prev.owl');
//     }
//     e.preventDefault();
// });
})(jQuery);

(function ($) {
  "use strict";

  // PRE LOADER
  // $(window).load(function(){
  //   $('.preloader').delay(500).slideUp('slow'); // set duration in brackets
  // });

  // MENU
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(window).scroll(function () {
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
    autoplay: true,
    autoplayTimeout: 5000,
    // autoplayHoverPause: true,
    autoplaySpeed: 1000,
    dots: true,
    margin: 40,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1199: {
        items: 3
      },
      1700: {
        items: 4
      }
    }
  });


/* ==================================================
   GALLERY
================================================== */

  //filtering
  var $filterType = $('.filter li.active a').attr('class');
  var $holder = $('ul.holderfilter');
  var $data = $holder.clone();

  $('.filter li a').click(function (e) {

    $('.filter li').removeClass('active');

    var $filterType = $(this).attr('class');

    $(this).parent().addClass('active');

    if ($filterType == 'test1') {

      var $filteredData = $data.find('li');
    } else {

      var $filteredData = $data.find('li[data-type=' + $filterType + ']');
    }

    $holder.quicksand($filteredData, {
      duration: 1000,
      easing: 'easeInOutQuad'
    });
    return false;
  });
  // lightcase - gallery-zoom
  $('a[data-rel^=lightcase]').lightcase({
    swipe: true,
    fullscreenModeForMobile: true,
    transition: 'scrollHorizontal',
    speedIn: 1100,
    speedOut: 900,
    showSequenceInfo: false,
    maxHeight: 600
  });



  // CONTACT FORM
  $('.myform').on('submit', function () {

    // Add text 'loading...' right after clicking on the submit button.
    $('.output_message').text('Loading...');

    var form = $(this);
    $.ajax({
      url: form.attr('action'),
      method: form.attr('method'),
      data: form.serialize(),
      success: function (result) {
        if (result == 'success') {
          $('.output_message').text('Message Sent!');
        } else {
          $('.output_message').text('Error Sending email!');
        }
      }
    });

    // Prevents default submission of the form after clicking on the submit button.
    return false;
  });

  //   var form = $('.contact__form'),
  //   message = $('.contact__msg'),
  //   form_data;
  // // Success function
  // function done_func(response) {
  //   message.fadeIn().removeClass('alert-danger').addClass('alert-success');
  //   message.text(response);
  //   setTimeout(function () {
  //       message.fadeOut();
  //   }, 2000);
  //   form.find('input:not([type="submit"]), textarea').val('');
  // }
  // // fail function
  // function fail_func(data) {
  //   message.fadeIn().removeClass('alert-success').addClass('alert-success');
  //   message.text(data.responseText);
  //   setTimeout(function () {
  //       message.fadeOut();
  //   }, 2000);
  // }

  // form.submit(function (e) {
  //   e.preventDefault();
  //   form_data = $(this).serialize();
  //   $.ajax({
  //       type: 'POST',
  //       url: form.attr('action'),
  //       data: form_data
  //   })
  //   .done(done_func)
  //   .fail(fail_func);
  // });

  //   // Quicksand - filtering
  // $("#content").quicksand($("#data > li"),
  // {
  //   // all the parameters have sensible defaults
  //   // and in most cases can be optional
  //   duration: 1000,
  //   easing: "swing",
  //   attribute: "data-id",
  // }
  // );

  // <section id="projects">

  //                               <ul id="thumbs">

  //                                               <!-- Item Project and Filter Name -->
  //                                   <li class="item-thumbs span3 design">
  //                                       <!-- Fancybox - Gallery Enabled - Title - Full Image -->
  //                                       <a class="hover-wrap fancybox" data-fancybox-group="gallery" title="The City" href="_include/img/work/full/image-01-full.jpg">
  //                                           <span class="overlay-img"></span>
  //                                         <span class="overlay-img-thumb font-icon-plus"></span>
  //                                     </a>
  //                                     <!-- Thumb Image and Description -->
  //                                     <img src="_include/img/work/thumbs/image-01.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis.">
  //                                 </li>
  //                                   <!-- End Item Project -->

  //                                               <!-- Item Project and Filter Name -->
  //                                   <li class="item-thumbs span3 design">
  //                                       <!-- Fancybox - Gallery Enabled - Title - Full Image -->
  //                                       <a class="hover-wrap fancybox" data-fancybox-group="gallery" title="The Office" href="_include/img/work/full/image-02-full.jpg">
  //                                           <span class="overlay-img"></span>
  //                                         <span class="overlay-img-thumb font-icon-plus"></span>
  //                                     </a>
  //                                     <!-- Thumb Image and Description -->
  //                                     <img src="_include/img/work/thumbs/image-02.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis.">
  //                                 </li>
  //                                   <!-- End Item Project -->

  //                                               <!-- Item Project and Filter Name -->
  //                                   <li class="item-thumbs span3 photography">
  //                                       <!-- Fancybox - Gallery Enabled - Title - Full Image -->
  //                                       <a class="hover-wrap fancybox" data-fancybox-group="gallery" title="The Mountains" href="_include/img/work/full/image-03-full.jpg">
  //                                           <span class="overlay-img"></span>
  //                                         <span class="overlay-img-thumb font-icon-plus"></span>
  //                                     </a>
  //                                     <!-- Thumb Image and Description -->
  //                                     <img src="_include/img/work/thumbs/image-03.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis.">
  //                                 </li>
  //                                   <!-- End Item Project -->

  //                                               <!-- Item Project and Filter Name -->
  //                                   <li class="item-thumbs span3 video">
  //                                       <!-- Fancybox Media - Gallery Enabled - Title - Link to Video -->
  //                                       <a class="hover-wrap fancybox-media" data-fancybox-group="video" title="Video Content From Vimeo" href="http://vimeo.com/51460511">
  //                                           <span class="overlay-img"></span>
  //                                         <span class="overlay-img-thumb font-icon-plus"></span>
  //                                     </a>
  //                                     <!-- Thumb Image and Description -->
  //                                     <img src="_include/img/work/thumbs/image-08.jpg" alt="Video">
  //                                 </li>
  //                                   <!-- End Item Project -->

  //                                               <!-- Item Project and Filter Name -->
  //                                   <li class="item-thumbs span3 photography">
  //                                       <!-- Fancybox - Gallery Enabled - Title - Full Image -->
  //                                       <a class="hover-wrap fancybox" data-fancybox-group="gallery" title="The Sea" href="_include/img/work/full/image-04-full.jpg">
  //                                           <span class="overlay-img"></span>
  //                                         <span class="overlay-img-thumb font-icon-plus"></span>
  //                                     </a>
  //                                     <!-- Thumb Image and Description -->
  //                                     <img src="_include/img/work/thumbs/image-04.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis.">
  //                                 </li>
  //                                   <!-- End Item Project -->

  //                                               <!-- Item Project and Filter Name -->
  //                                   <li class="item-thumbs span3 photography">
  //                                       <!-- Fancybox - Gallery Enabled - Title - Full Image -->
  //                                       <a class="hover-wrap fancybox" data-fancybox-group="gallery" title="Clouds" href="_include/img/work/full/image-05-full.jpg">
  //                                           <span class="overlay-img"></span>
  //                                         <span class="overlay-img-thumb font-icon-plus"></span>
  //                                     </a>
  //                                     <!-- Thumb Image and Description -->
  //                                     <img src="_include/img/work/thumbs/image-05.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis.">
  //                                 </li>
  //                                   <!-- End Item Project -->

  //                                               <!-- Item Project and Filter Name -->
  //                                   <li class="item-thumbs span3 video">
  //                                       <!-- Fancybox Media - Gallery Enabled - Title - Link to Video -->
  //                                       <a class="hover-wrap fancybox-media" data-fancybox-group="video" title="Video Content From Vimeo" href="http://vimeo.com/50834315">
  //                                           <span class="overlay-img"></span>
  //                                         <span class="overlay-img-thumb font-icon-plus"></span>
  //                                     </a>
  //                                     <!-- Thumb Image and Description -->
  //                                     <img src="_include/img/work/thumbs/image-09.jpg" alt="Video">
  //                                 </li>
  //                                   <!-- End Item Project -->

  //                                               <!-- Item Project and Filter Name -->
  //                                   <li class="item-thumbs span3 design">
  //                                       <!-- Fancybox - Gallery Enabled - Title - Full Image -->
  //                                       <a class="hover-wrap fancybox" data-fancybox-group="gallery" title="The Dark" href="_include/img/work/full/image-06-full.jpg">
  //                                           <span class="overlay-img"></span>
  //                                         <span class="overlay-img-thumb font-icon-plus"></span>
  //                                     </a>
  //                                     <!-- Thumb Image and Description -->
  //                                     <img src="_include/img/work/thumbs/image-06.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis.">
  //                                 </li>
  //                                   <!-- End Item Project -->

  //                                               <!-- Item Project and Filter Name -->
  //                                   <li class="item-thumbs span3 design">
  //                                       <!-- Fancybox - Gallery Enabled - Title - Full Image -->
  //                                       <a class="hover-wrap fancybox" data-fancybox-group="gallery" title="The Beach" href="_include/img/work/full/image-07-full.jpg">
  //                                           <span class="overlay-img"></span>
  //                                         <span class="overlay-img-thumb font-icon-plus"></span>
  //                                     </a>
  //                                     <!-- Thumb Image and Description -->
  //                                     <img src="_include/img/work/thumbs/image-07.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis.">
  //                                 </li>
  //                                   <!-- End Item Project -->
  //                               </ul>
  //                         </section>

  // owl.on('mousewheel', '.owl-stage', function (e) {
  //     if (e.deltaY>0) {
  //         owl.trigger('next.owl');
  //     } else {
  //         owl.trigger('prev.owl');
  //     }
  //     e.preventDefault();
  // });
})(jQuery);
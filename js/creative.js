(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 106)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 107
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  $("#email").click(function () {
    window.location.href = "mailto:user@example.com?subject=Auction List&body=Hey there, I would like to be added to your Auction List.";
  });

  offsetOrNot();
  $(window).resize(offsetOrNot);

  function offsetOrNot() {
    if ($(window).width() <= 767) {
      $("#annuals").removeClass("offset-1");
    }
  }



  var flowerItems = [
    {
      "type": "annuals",
      "text": "<h4>Accent Plants</h4><h4>Vines</h4><h4>Geraniums</h4><h4>4 Inch Pots</h4><h4>18'01</h4>"
    },
    {
      "type": "hangingBaskets",
      "text": "<h4>Petunias</h4><h4>Million Bells</h4><h4>Begonias</h4><h4>Hanging Bags</h4><h4>Watering Cans</h4>"
    },
    {
      "type": "pottedArrangements",
      "text": "<h4>Sunny</h4><h4>Shady</h4><h4>Window Boxes</h4><h4>Succulent Tea Cups</h4><h4>Canners</h4>"
    },
    {
      "type": "vegetables",
      "text": "<h4>Peppers</h4><h4>Cabbage</h4><h4>Herbs</h4><h4>Broccoli</h4><h4>Seeds</h4>"
    },
    {
      "type": "perennials",
      "text": "<h4>Hostas</h4><h4>Clematis</h4><h4>Strawberry</h4><h4>Canna Lillies</h4><h4>Day Lillies</h4>"
    }
  ];


  $(".clickable").click(function (div) {

    var selection = div.currentTarget.id;

    flowerItems.forEach(function (flowerType) {
      if (selection === flowerType.type) {
        $(".insert-content").html();
        $(".insert-content").html(flowerType.text);
      }
    });

    $("#flowerPopup").toggle();

  });

  $(".modal-close").click(function () {
    $("#flowerPopup").toggle();
  })

  $('.gallery-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: true,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: '<i class="fa fa-chevron-right"></i>',
    prevArrow: '<i class="fa fa-chevron-left"></i>',
  });



})(jQuery); // End of use strict

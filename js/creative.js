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
    if ($(window).width() > 550) {
      $("#flower1").addClass("offset-1");
    }
    else {
      $("#flower1").removeClass("offset-1");
    }
  }



  var flowerItems = [
    {
      "type": "flower1",
      "text": "<h4>item1</h4><h4>item2</h4><h4>item3</h4><h4>item4</h4><h4>item5</h4>"
    },
    {
      "type": "flower2",
      "text": "<h4>item1</h4><h4>item2</h4><h4>item3</h4><h4>item4</h4><h4>item5</h4>"
    },
    {
      "type": "flower3",
      "text": "<h4>item1</h4><h4>item2</h4><h4>item3</h4><h4>item4</h4><h4>item5</h4>"
    },
    {
      "type": "flower4",
      "text": "<h4>item1</h4><h4>item2</h4><h4>item3</h4><h4>item4</h4><h4>item5</h4>"
    },
    {
      "type": "flower5",
      "text": "<h4>item1</h4><h4>item2</h4><h4>item3</h4><h4>item4</h4><h4>item5</h4>"
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
    autoplaySpeed: 4000,
  });



})(jQuery); // End of use strict

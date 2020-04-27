/*js eroor detector*/

window.onerror = function (msg, url, LineNo, columnNo, error) {
  alert(
    "An error occured on" +
      "Line no : " +
      LineNo +
      "  Column no : " +
      columnNo +
      "\n\nMessage : " +
      msg +
      "\n\nerror : " +
      error +
      "\n\nUrl : " +
      url
  );
};

/*js eroor detector*/

const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  960: {
    items: 3,
  },
};

$(document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  /** Click event on togglemenu*/
  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });

  //owl-carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    responsive: responsive,
  });

  //click to croolon top to website
  $(".move-up span").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  //animation on scrool
  AOS.init();
});

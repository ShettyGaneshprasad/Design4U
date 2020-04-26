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
    autoplay: false,
    autoplayTimeout: 2000,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
});

$(".menu-btn").click(function () {
  $(".navbar .menubar").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});

//typing animation
var typed = new Typed(".typing1", {
  strings: ["This is SuBeen's portfolio", "Nice to meet you"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typing2", {
  strings: ["This is SuBeen's portfolio", "Nice to meet you"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

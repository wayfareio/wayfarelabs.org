//= require vendor/retina.min
//= require vendor/bigslide

$(function() {
  $('.big-slide-link').bigSlide({
    menu: "#big-slide-panel",
    push: ".big-slide-push",
    side: "right",
    easyClose: true});
});

$(document).on("click", "[data-scroll-to]", function(e) {
  var scrollTo = $(e.target).data("scroll-to");
  if (!scrollTo) return;
  var targetTop = $(scrollTo).offset().top;
  var scrollOffset = $(e.target).data("scroll-offset");
  if (scrollOffset) {
    var scrollTop = targetTop + scrollOffset;
  } else {
    var scrollTop = targetTop;
  }
  $("html, body").animate({ scrollTop: scrollTop }, 650);
});

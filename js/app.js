// $document.ready means when our page gets load:
$(document).ready(function ()
{
  $('.slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.slider-dots',// We have to put the dots because it is a selector.
    dotsClass: 'dots',
  });

});

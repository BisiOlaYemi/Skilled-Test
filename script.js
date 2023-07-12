$(document).ready(function() {
  $('.accordion-header').click(function() {
    $(this).parent('.accordion-item').toggleClass('active');
    $(this).siblings('.accordion-content').slideToggle();
  });
});

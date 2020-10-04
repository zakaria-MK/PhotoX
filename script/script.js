$(document).ready(function () {
  $('.nav-button').click(function () {
    $('.nav-button').toggleClass('change');
  })

  $(window) scroll(function () {
    let position = $(this).scrollTop();
    console.log(position);
  })
});

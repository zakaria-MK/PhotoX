$(document).ready(function () {
  $('.nav-button').click(function () {
    $('.nav-button').toggleClass('change');
  })

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $('.nav-menu').addClass('custom-navbar');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
    }
  })

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 450) {
      $('.camera').addClass('fromleft');
      $('.paragraph').addClass('fromright');
    } else {
      $('.camera').removeClass('fromleft');
      $('.paragraph').removeClass('fromright');
    }
  })
  
  $('.gallery-list').click(function () {
    let value = $(this).attr('data-filter');
    if (value === 'all'){
      $('.filter').show(300);
    } else {
      $('.filter').not('.' + value).hide(300);
      $('.filter').filter('.' + value).show(300);
    }
  })

  $('.gallery-list').click(function () {
    $(this).addClass('active-list').siblings().removeClass('active-list');
  })

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    
    if (position >= 3700) {
      $('.card-1').addClass('movefromLeft');
      $('.card-3').addClass('movefromRight');
      $('.card-2').addClass('movefromBottom');
    }else {
      $('.card-1').removeClass('movefromLeft');
      $('.card-3').removeClass('movefromRight');
      $('.card-2').removeClass('movefromBottom');
    }
  });

});



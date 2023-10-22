import $ from 'jquery'; // Import jQuery

export function executeAnimation() {
  // animate content
  $('.content').addClass('animate_content');
  $('.page__description').fadeOut(6000).delay(1000).fadeIn();

  setTimeout(function() {
    $('.content').removeClass('animate_content');
  }, 3200);

  // remove fadeIn class after 1500ms
  setTimeout(function() {
    $('.content').removeClass('fadeIn');
  }, 1500);
}

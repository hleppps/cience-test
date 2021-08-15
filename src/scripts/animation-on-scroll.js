import * as $ from 'jquery';

function isElementInViewport(elem) {
  var $elem = $(elem);

  // Get the scroll position of the page.
  var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  // Get the position of the element on the page.
  var elemTop = Math.round( $elem.offset().top );
  var elemBottom = elemTop + $elem.height();

  return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

function checkAnimation(className) {
  var $elem = $('.' + className);

  if (isElementInViewport($elem)) {
      $elem.addClass('start');
  } else {
      $elem.removeClass('start');
  }
}

$(window).scroll(function(){
  checkAnimation('projects-block__item-img'); 
  checkAnimation('video-block__image'); 
});
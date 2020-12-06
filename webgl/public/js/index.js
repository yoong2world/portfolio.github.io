import WebGL from './js/classes/WebGL.js'


let webgl = new WebGL()

$('header .about').on('click', function() {
  if ($(this).hasClass('on')) $('#about').removeClass('on');
  else $('#about').addClass('on');
})

$('.btn_close').on('click', function() {
  $('#about').removeClass('on');
})
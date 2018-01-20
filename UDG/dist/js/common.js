'use strict';


console.log('Hello, I wish you a good day');


// open menu
$('.toggle').click(function() {
	$('.nav-menu') .toggleClass('nav-menu__active');
	$('.toggle').toggleClass('active');
	$('.wrapper').toggleClass('wrapper--bg');
	$('header').toggleClass('menu-active');
});

$(document).click(function(event) {
	if ($(event.target).closest('.toggle').length ) return;
	$('.nav-menu').removeClass('nav-menu__active');
	$('.toggle').removeClass('active');
	$('.wrapper').removeClass('wrapper--bg');
	$('header').removeClass('menu-active');
	event.stopPropagation();
});


// open search
$('.nav-search').click(function() {
	$('.nav-search__input').toggleClass('nav-search__input--active');
	$('.header-line').toggleClass('header-line--none');
	$('.nav-search').toggleClass('nav-search--active');
	$('.nav-search__section-close').toggleClass('nav-search__section-close--active');
});

$('.nav-search__section-close').click(function() {
	$('.nav-search__input').toggleClass('nav-search__input--active');
	$('.header-line').toggleClass('header-line--none');
	$('.nav-search').toggleClass('nav-search--active');
	$('.nav-search__section-close').toggleClass('nav-search__section-close--active');
});


// slider
$('.slider-wrap').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$('.slick-next').addClass('custom-next').html('→');
$('.slick-prev').addClass('custom-prev').html('←');
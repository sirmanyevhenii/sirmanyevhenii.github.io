'use strict';


console.log('Hello, I wish you a good day');


// open menu
$('.toggle-btn').click(function() {
	$('.bottom-nav') .toggleClass('bottom-nav--active');
	$('.toggle-btn').toggleClass('active');
	$('.wrapper').toggleClass('wrapper--bg');
	// $('header').toggleClass('menu-active');
});

$('.menu-nav__item').click(function() {
	$(this).children('.menu-nav__sublist').toggleClass('menu-nav__sublist--active');
	$(this).children('.menu-nav__arrow').toggleClass('menu-nav__arrow--active');
	// $('.wrapper').toggleClass('wrapper--bg');
	// $('header').toggleClass('menu-active');
});

$('.menu-nav__sublink').click(function() {
	$('.bottom-nav').removeClass('bottom-nav--active');
	$('.toggle-btn').removeClass('active');
});

$('.settings-nav-search__icon').click(function() {
	$('.settings-nav-search__input').toggleClass('settings-nav-search__input--active');
});

$('.search-img').click(function() {
  $('.search-input').toggleClass('search-input--active');
});
// $(document).click(function(event) {
	// if ($(event.target).closest('.toggle-btn').length ) return;
	// $('.bottom-nav').removeClass('bottom-nav--active');
	// $('.toggle-btn').removeClass('active');
	// $('.wrapper').removeClass('wrapper--bg');
	// $('header').removeClass('menu-active');
	// event.stopPropagation();
// });


// open search
// $('.nav-search').click(function() {
// 	$('.nav-search__input').toggleClass('nav-search__input--active');
// 	$('.header-line').toggleClass('header-line--none');
// 	$('.nav-search').toggleClass('nav-search--active');
// 	$('.nav-search__section-close').toggleClass('nav-search__section-close--active');
// });

// $('.nav-search__section-close').click(function() {
// 	$('.nav-search__input').toggleClass('nav-search__input--active');
// 	$('.header-line').toggleClass('header-line--none');
// 	$('.nav-search').toggleClass('nav-search--active');
// 	$('.nav-search__section-close').toggleClass('nav-search__section-close--active');
// });


// slider
$('.center').slick({
  centerMode: true,
  dots: true,
  centerPadding: '60px',
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    }
  ]
});

// datepiker

$( function() {
  $( "#datepicker" ).datepicker();
} );
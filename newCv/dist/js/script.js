'use strict';


console.log('Hello, I wish you a good day');


// open menu
$('.toggle-btn').click(function() {
	$('.navbar').toggleClass('navbar--active');
	$('.toggle-btn').toggleClass('active');
	// $('.wrapper').toggleClass('wrapper--bg');
	// $('header').toggleClass('menu-active');
});

$(document).click(function(event) {
	if ($(event.target).closest('.toggle-btn').length ) return;
	$('.toggle-btn').removeClass('active');
	$('.navbar').removeClass('navbar--active');
	event.stopPropagation();
});
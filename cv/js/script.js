'use strict';

$('.toggle').click(function() {
	$('.navbar') .toggleClass('navbar__active');
	$('.toggle').toggleClass('active');
});

$(document).click(function(event) {
	if ($(event.target).closest('.toggle').length ) return;
	$('.navbar').removeClass('navbar__active');
	$('.toggle').removeClass('active');
	event.stopPropagation();
});


console.log('Hello, I wish you a good day');
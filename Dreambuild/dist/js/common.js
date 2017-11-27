
'use strict';
 
 // menu
	$('.menu-btn').click(function() {
		$('.menu-list').toggleClass('menu-list--active');
		$('.menu-btn').toggleClass('menu-btn--active');
	});

	$(document).click(function(event) {
		if ($(event.target).closest('.menu-btn').length ) return;
		$('.menu-list').removeClass('menu-list--active');
		$('.menu-btn').removeClass('menu-btn--active');
		event.stopPropagation();
	});


	// scroll add elements
	$(document).ready(function(){
	var h = $(window).height();
	
	$(window).scroll(function(){
		if ( ($(this).scrollTop()+h) >= $(".what-we-do__title").offset().top) {
			$(".what-we-do__article-1").css({visibility:"visible"});
			$(".what-we-do__article-1").addClass('animated bounceInLeft');
		} 
		if ( ($(this).scrollTop()+h) >= $(".what-we-do__title").offset().top) {
			$(".what-we-do__article-2").css({visibility:"visible"});
			$(".what-we-do__article-2").addClass('animated bounceInRight');
		} 
		if ( ($(this).scrollTop()+h) >= $(".what-we-do__title").offset().top) {
			$(".what-we-do__article-3").css({visibility:"visible"});
			$(".what-we-do__article-3").addClass('animated bounceInLeft');
		} 
		if ( $(this).scrollTop() == 0 ) {
			$(".what-we-do__article-1, .what-we-do__article-2, .what-we-do__article-3").each(function(){
				$(this).removeClass("animated bounceInRight bounceInLeft");
				$(this).css({visibility:"hidden"});
			});
		}
	});
});


// slider
$('.carousel').carousel({ interval: false });


console.log('Hello, I wish you a good day');

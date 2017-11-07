'use strict';

		// bxSlider
    $(document).ready(function(){
      $('.slider').bxSlider({
      	pager: false
      });
    });

    // Isotope
		$('.grid').isotope({
		  // options
		  itemSelector: '.grid-item',
		  layoutMode: 'fitRows'
		});

console.log('Hello, I wish you a good day');
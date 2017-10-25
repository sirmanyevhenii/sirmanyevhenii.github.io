
(function ($) {

	 $.fn.fancybox = function() {
	 	 
	 	 var $link = this;
	 	 var $body = $('body');
	 	 var $modal;
	 	 var $overlay;

	 	 function showModal(e) {
	 	 	var href = $link.attr('href');
	 	 	$modal = $('<div class="fancybox-modal"><img class="img-modal" src="' + this.href + '"></div>');
	 	 	$overlay = $('<div class="fancybox-overlay"></div>');

	 	 	e.preventDefault();
	 	 	$body.append($overlay);
	 	 	$body.append($modal);
	 	 	$modal.one('click', hideModal);
	 		$overlay.one('click', hideModal);
	 	 }

	 	 function hideModal () {
	 	 	$modal.remove();
	 	 	$overlay.remove(); 
	 	 }

	 	 $link.on('click', showModal);

	 	 return this;
	 } 

})(jQuery);
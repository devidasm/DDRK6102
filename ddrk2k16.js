jQuery(document).ready(function() {
	"use strict";

	var $ = jQuery,
	html = $('html');

	// IE<8 Warning
	if (html.hasClass("ie6") || html.hasClass("ie7")) {
		$("body").empty().html('UPDATE YOUR BROWSER');
	}



	// Listing Item
	( function() {
		var store_listing_item = $('.store-listing-item');
		store_listing_item.each( function(){
			// Open Modal
			var coupon_modal = $(this).find('.coupon-modal');
			var coupon_id = coupon_modal.attr('id');
			$(this).find('.coupon-button-type .coupon-button').click( function () {
				var aff_url = $(this).attr('data-aff-url');
				var current_url = $(location).attr('href');
				window.open(aff_url, '_self');
				window.open('#'+ coupon_id,'_blank');
				$(coupon_modal).modal('show');
				return false;
			} );
			var coupon_hash = $(location).attr('hash');
			if ( coupon_hash == '#'+coupon_id ) {
				$(coupon_modal).modal('show');
			}

			// Reveal box
			var reveal_link = $(this).find('.coupon-footer li a');
			var reveal_content = $(this).find('.reveal-content');
			reveal_link.each( function() {
				$(this).click( function(){

					reveal_link.removeClass('active');
					$(this).addClass('active');
					//$(this).toggleClass('active');

					var reveal_link_data = $(this).attr('data-reveal');
					reveal_content.each( function() {
						if( $(this).hasClass(reveal_link_data) ) {
							reveal_content.removeClass('active');
							$(this).addClass('active');
							
							$(this).find('.close').on( 'click', function() {
								$(this).parent().removeClass('active');
								reveal_link.removeClass('active');
							});
						}
					});
					return false;
				});
			} );
		});
	} )();

});

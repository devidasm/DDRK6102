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
        var store_listing_item = $('.coupon-container');
        store_listing_item.each( function(){
            // Open Modal
            //	var coupon_modal = $(this).find('.coupon-modal');
            //	var coupon_id = coupon_modal.attr('id');
            $(this).find('button').click( function () {
                var aff_url = $(this).attr('data-aff-url');
                //aff_url = 'http://www.google.com';
console.log('URLLLLL'+ 'aff_url');
                //alert(aff_url);
                var current_url = $(location).attr('href');
                window.open(aff_url, '_self');
                window.open('#'+ 'coupon','_blank');
                //	$(coupon_modal).modal('show');
                return false;
            } );
           

           
        });
    } )();

});

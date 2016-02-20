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
                var aff_url = $(this).attr('offer-url');
                var desc = $(this).attr('coupon-desc');
                var cpc = $(this).attr('cp_code');
                
                 
            if(cpc!='undefined')
            {
              $(".offer-desc").text(desc);  
              $(".code-text").text(cpc);
            }
             else     
             {
                 alert('in else');
              $(".offer-desc").text('No Coupon Code Required');  
              $(".code-text").text('DEAL ACTIVATED');
             }
            
               $('#fadeandscale').popup('show');
                 window.open(aff_url, '_blank');
                window.open('#'+ 'coupon','_self');

                //	$(coupon_modal).modal('show');
                return false;
            } );
           

           
        });
    } )();

});

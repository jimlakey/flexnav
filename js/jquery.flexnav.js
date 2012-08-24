/*global jQuery */
/*!	
* FlexNav.js 0.3
*
* Copyright 2012, Jason Weaver http://jasonweaver.name
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: Sunday July 8
*/

(function($) {
	$.fn.flexNav = function(options) {
	    var settings = $.extend({
	        'breakpoint': '800',
	        'animationSpeed': 'fast'
	    },
	    options);

	    var $this = $(this);

	    var resizer = function() {
	        if ($(window).width() < settings.breakpoint) {
	            $("body").removeClass("lg-screen").addClass("sm-screen");
			}
	        else {
	            $("body").removeClass("sm-screen").addClass("lg-screen");

	            // to fix display:none/block carying over on window size change
	            $(".sub-menu").css({'display':''});
	            $("ul#nav").css({'display':''});
	            
	            // if change from small to large with menu open, reset arrows
	            $('.item-with-ul').removeClass("active");
	            $('.menu-button').removeClass("active");

	        }
	    };

	    // Call once to set.
	    resizer();

	    // Function for testing touch screens
	    function is_touch_device() {
	        return !! ('ontouchstart' in window);
	    }

	    // Set class on html element for touch/no-touch
	    if (is_touch_device()) {
	        $('html').removeClass('flexNav-no-touch').addClass('flexNav-touch');
	    // } else {
	    //     $('html').addClass('flexNav-no-touch');
	    }

	    // Toggle for nav menu
	    $('.menu-button').click(function() {
	        $this.slideToggle(settings.animationSpeed);
	        $(this).toggleClass("active"); /* for arrow animation */
	    });
	
	    // Closes nav menu after links clicked/touched
	    $this.find('a').click(function() {
	        $this.hide();
	    });
	
	    // Toggle click for sub-menus on touch and or small screens
	    $('.item-with-ul').click(function() {
	        $(this).find('.sub-menu').slideToggle(settings.animationSpeed);
	        $(this).toggleClass("active"); /* for arrow animation */
	    });

	    // Call on resize.
	    $(window).on('resize', resizer);

	};

})(jQuery);
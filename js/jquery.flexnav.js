/*global jQuery */
/*!
* Based on:
* FlexNav.js 0.3
*
* Copyright 2012, Jason Weaver http://jasonweaver.name
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Revised by: Jim lakey http://applecanyondesigns.com
*/

(function($) {
	$.fn.flexNav = function(options) {
	    var settings = $.extend({
	        'animationSpeed': 'fast'
	    },
	    options);

	    var $this = $(this);

	    // Function for testing touch screens
	    function is_touch_device() {
	        return !! ('ontouchstart' in window);
	    }

	    // Set class on html element for touch/no-touch
	    // Keeping class name specific to avoid modernizr clash?
	    if (is_touch_device()) {
	        $('html').removeClass('flexNav-no-js').addClass('flexNav-touch');
	    } else {
	        $('html').removeClass('flexNav-no-js').addClass('flexNav-no-touch');
	    }

	    var resizer = function() {

		        if ($('.flexNav-nav li').css('float')==='none') {
		            $("body").removeClass("lg-screen").addClass("sm-screen");
		            // To allow toggling on sm-screen
		            $('.flexNav-no-touch .flexNav-nav .item-with-ul > ul').removeClass('sub-menu-no-tog').addClass('sub-menu');

				} else {
		            $("body").removeClass("sm-screen").addClass("lg-screen");
					// To stop menu toggling on lg-screen
		            $('.flexNav-no-touch .flexNav-nav .item-with-ul > ul').removeClass('sub-menu').addClass('sub-menu-no-tog');

		            // to fix display:none/block carrying over on window size change
		            $(".sub-menu").css({'display':''});
		            $(".sub-menu-no-tog").css({'display':''});
		            $(".flexNav-nav").css({'display':''});

		            // if change from small to large with menu open, reset menu toggle symbols
		            $('.item-with-ul').removeClass("active");
		            $('.menu-button').removeClass("active");
		        }
	    };

	    // Call once to set.
	    resizer();


	    // Toggle for nav menu
	    $('.menu-button').click(function() {
	       $this.slideToggle(settings.animationSpeed);
	         // to toggle any animations...
	        $(this).toggleClass("active");
	    });

	    // Toggle click for sub-menus on touch and or small screens

		    $('.link-with-ul').click(function(event) {
		    	event.preventDefault();
		        $(this).parent().find('.sub-menu').slideToggle(settings.animationSpeed);
		        // to toggle + and -
		        $(this).parent().toggleClass("active");
		    });

	    // Call on resize.
	    $(window).on('resize', resizer);

	};

})(jQuery);
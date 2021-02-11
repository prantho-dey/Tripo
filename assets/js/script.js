(function ($) {

    'use strict';

	// One Page Nav
	var top_offset = $('.header-area').height() - 10;
	$('.menu nav ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});



	/*------------------------------------
		Mobile Menu
	--------------------------------------*/
	jQuery('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu-area',
		meanRevealPosition: "right",
		meanScreenWidth: "767",
		meanMenuOpen: "<svg class='menu-icon' xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\">\n" +
			"<path d=\"M1 5H15M1 1H19M1 9H19M1 13H15\" stroke=\"#A02206\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
			"</svg>",
		meanMenuClose: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
			"    <line x1=\"1\" y1=\"24\" x2=\"24\" y2=\"1\" stroke=\"#A02206\" stroke-width=\"2\" />\n" +
			"    <line x1=\"1\" y1=\"1\" x2=\"24\" y2=\"24\" stroke=\"#A02206\" stroke-width=\"2\" />\n" +
			"</svg>",
		meanMenuCloseSize: "18px",
		meanMenuOpenSize: "18px",
		
	});

	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */

	let win = $(window);
	let sticky_id = $(".header-area");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 245) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});


	/*------------------------------------
        scrollUp
	--------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#scrollUp').fadeIn();
		} else {
			$('#scrollUp').fadeOut();
		}
    });
    
	$('#scrollUp').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});

	// Slider 
	$('.slider').owlCarousel({
		loop:true,
		navText: ['<i class="fal fa-chevron-left"></i>','<i class="fal fa-chevron-right"></i>'],
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 10000,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	// Water Rippls
	$('.video-area').ripples({
		dropRadius: 10,
		perturbance: 0.03,
	  });

	  // Video Popup
	  $('.popup-video').magnificPopup({
		type: 'iframe'
	});

	// Scroll-top-button
	$('.scroll-top-button').click(function(){
		$('html').animate({'scrollTop':'0px'},4000) ;
	});

	$(window).scroll(function(){

		var scroll = jQuery(window).scrollTop();

		if (scroll > 300) {
			$('.scroll-top-button').show();
		}else{
			$('.scroll-top-button').hide();
		}
	});




})(jQuery);

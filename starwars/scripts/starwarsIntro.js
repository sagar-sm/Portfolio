;(function ($) {
	var intro = $('.intro'),
	    logo = $('.logo'),
	    audio = $('#starwars-theme'),
	    scroll = $('.scroll'),
	    transEndEventNames = {
		    'WebkitTransition' : 'webkitTransitionEnd',
		    'MozTransition'    : 'transitionend',
		    'OTransition'      : 'oTransitionEnd',
		    'msTransition'     : 'MSTransitionEnd',
		    'transition'       : 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];
	    
	$(function () {
		if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
			$('.perspective').css({overflow:'hidden'});
		}
		if (!(navigator.userAgent.toLowerCase().indexOf('safari') > -1)) {
			intro.text('Please use Chrome or Safari to view this page.');
			scroll.hide();
			intro.addClass('show');
			return false;
		}
		intro.bind(transEndEventName, function () {
			setTimeout(function () {
				audio[0].play();
				intro.removeClass('show');
				logo.addClass('show')
				logo.find('img').addClass('recede');
				
				logo.find('img').bind(transEndEventName, function () {
					logo.removeClass('show');
					scroll.addClass('play');
					scroll.bind(transEndEventName, function () {
						scroll.css('opacity', 0);
					});
				});
			}, 3000);
		});
		intro.addClass('show');
	});
})(jQuery);

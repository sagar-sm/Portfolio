;(function ($) {
	var intro = $('.intro'),
	    logo = $('.logo'),
	    audio = $('#starwars-theme'),
	    crawl = $('.crawl'),
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
			intro.text('Your browser does not properly support CSS 3D Transforms.  Please check this out in either Chrome or Safari.');
			crawl.hide();
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
					crawl.addClass('play');
					crawl.bind(transEndEventName, function () {
						crawl.css('opacity', 0);
					});
				});
			}, 3000);
		});
		intro.addClass('show');
	});
})(jQuery);

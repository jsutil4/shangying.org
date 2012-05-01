(function($){
$(document).ready(function() {
	
	//load footer
	
	var featuredIndex = 0;
	var $theme = $('#highlights ul li:first-child').attr('class');
	var prevTheme = 'default';

	// Assign theme of latest or main highlight
	if ($('#highlights ul').find('#main_highlight').length) {

		var $theme = $('#highlights ul #main_highlight').attr('class');
		var prevTheme = 'default';
		var featuredIndex = $('#highlights ul').find('#main_highlight').index();	
			
	} 	
	
	set_theme($theme);

	//cycle through attractors
	$('#highlights ul').before("<a id='left' class='nav left' title='Previous'></a><a id='right' class='nav right' title='Coming up'></a>").cycle({
		onPrevNextEvent: on_prev_next,
		before: onBefore,
		fx: 'scrollHorz',
		cleartypeNoBg: true,  
  		next: "#right",
		prev: "#left",
		speed: 1000,
		startingSlide: featuredIndex,
		timeout: 10000
	});
	
	// Pause cycle on hover
	$('#highlights .nav').hover(function(){
		$('#highlights ul').cycle('pause');
	}, function(){
		$('#highlights ul').cycle('resume');
	});
	
	// Pause cycle on page scroll
	$(window).scroll(function(){	  
		var y = $(window).scrollTop();	  

		if( y > 200) {
			$('#highlights ul').cycle('pause');
		} else {
			$('#highlights ul').cycle('resume');
		}
	});
	
	function onBefore(currSlideElement, nextSlideElement, options, forwardFlag) {		
		
		var next_index = $('#background li').eq($(nextSlideElement).index());
		
		if($('#background li:visible').length > 0) {
			$('#background li:visible').fadeOut(50, function(){
				next_index.fadeIn(1000, 'linear');
			});
		} else {
			$('#background li').eq($(nextSlideElement).index()).fadeIn(1000, 'linear');
		}
		
		var next_theme = $(nextSlideElement).attr("class");
		var next_content = $(nextSlideElement).html();
		set_theme(next_theme);
	}

	function on_prev_next(isNext, zeroBasedSlideIndex, slideElement)  {
		var curr_theme = $(slideElement).attr("class");
		set_theme(curr_theme);
	}

	function set_theme(theme) {

		if (theme != prevTheme) {	
			
			if (!($.browser.msie)) {
				$('#highlights .nav').animate({opacity: 0.25}, 'fast').switchClass(prevTheme, theme, 'fast').animate({opacity: 1}, 'fast');	   
			}
			
			$('body, #wrapper, #banner a, #banner p, #search, #SearchResultString, #explore h2, #explore a').switchClass(prevTheme, theme, 1000);
		}
		
		if ((theme == "dark") || (theme == "medium")) {
			$('.branding .white_logo').fadeIn('slow');
			$('.branding .black_logo').hide();
		} else {
			$('.branding .black_logo').fadeIn('slow');
			$('.branding .white_logo').hide();
		}

		prevTheme = theme;
		return prevTheme;
	}
	
});

// Trigger cycle with L/R keypress
$(document).bind('keydown', 'left', function(){
	$('#highlights ul').cycle('prev');
});
$(document).bind('keydown', 'right', function(){
	$('#highlights ul').cycle('next');
});
})(jQuery);

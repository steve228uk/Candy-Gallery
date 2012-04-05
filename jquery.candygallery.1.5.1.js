/*
*	Candy Gallery			
*
*	@author:			Stephen Radford, Twitter: @steve228uk
*	@version:			1.5.1
*	@Last Update:		04.03.2012
*	@licence:			MIT (http://www.opensource.org/licenses/mit-license.php)
*						GPL	(http://www.gnu.org/licenses/gpl.html)
*	@documentation:		github.com/steve228uk/Candy-Gallery
*	@feedback:			steve228uk@gmail.com
*
*/

(function($) {

$.fn.candygallery = function(options) { 
  var defaults = { 
    maxwidth:		640,
    thumbwidth:		80,
    thumbopacity:	0.7,
    title: 'true',
    changeon: 'click',
    thumbposition: 'after',
    fade: 'true',
    fadespeed: 500,
    nav: 'true',
    nexttext: '&rarr;',
    prevtext: '&larr;',
    auto: 'true',
    timeout: 3000
  }; 
 
  var options = $.extend({}, defaults, options); 

  return this.each(function() { 
    var obj = $(this);   
	var img = $(obj).children('img:first-child').attr('src');
	var twidth = parseFloat(options.thumbwidth) + 50;
	$(obj).children('img').wrap('<li />');
	$(obj).children('li').wrapAll('<ul class="gallery-ul" />');
	var thumbs = $(obj).children('.gallery-ul');
	var thumbimg = $(obj).children('.gallery-ul').children('li').children('img');
	var thumbli = $(obj).children('.gallery-ul').children('li');
	$(thumbimg).attr('width', twidth);
	if (options.thumbposition == 'after') { $(thumbs).before('<div class="big-image"></div>');}
	else{ $(thumbs).after('<div class="big-image"></div>');}
	var bigimg = $(obj).children('.big-image');
	$('<img src="'+ img +'" />').appendTo(bigimg);
	if (options.title == "true") {
		$('<div class="gallery-title"></div>').appendTo(bigimg);
		var galtitle = $(bigimg).children('.gallery-title');
		var firsttitle = $(thumbs).children('li:first-child').children('img').attr('alt');
		$(galtitle).text(firsttitle);
	}
	$(bigimg).children('img').attr('width', options.maxwidth);
	$(thumbli).css({
		'width': options.thumbwidth +'px',
		'height': options.thumbwidth +'px',
		'opacity': options.thumbopacity
	});
	$(thumbs).children('li:first-child').addClass('active-thumb');
	$(thumbs).children('li:last-child').attr('id', 'candy-last');
	$(thumbs).children('li:first-child').attr('id', 'candy-first');
	
	
	if (options.auto == 'true') {
		
		function autoNext(){
			
			var title = $(thumbs).children('.active-thumb').next('li').children('img').attr('alt');
			var image = $(thumbs).children('.active-thumb').next('li').children('img');
			
			if ($(thumbs).children('.active-thumb').attr('id') == 'candy-last') {
				var image = $(thumbs).children('li:first').children('img');
				var title = $(thumbs).children('li:first').children('img').attr('alt');
			}
			
			$(bigimg).children('.candy-prev').show();
			
			if (options.fade == 'true') {
				$(bigimg).children('img').addClass('del-me').stop(true,true);
				$('.del-me').css({
					'position': 'relative',
					'z-index': '2'
				});
				$(image).clone().appendTo(bigimg);
				$('.del-me').siblings('img').addClass('temp');
				$('.del-me').fadeOut(options.fadespeed, function() {
					$(this).remove();
					$('.temp').removeClass('temp');
				});
				$(bigimg).children('img').attr('width', options.maxwidth);
			} else {
				$(bigimg).children('img').remove();
				$(image).clone().appendTo(bigimg);
				$(bigimg).children('img').attr('width', options.maxwidth);
			}
			
			if (options.title == 'true') {
				var galtitle = $(bigimg).children('.gallery-title');
				$(galtitle).text(title);
			}
			
			$(thumbs).children('.active-thumb').removeClass('active-thumb');
			$(image).parent().addClass('active-thumb');
			
				
		}
		
		var timer = setInterval(autoNext, options.timeout);
		
	}
	

	if (options.nav == 'true') {
		$('<a href="javascript:void(0);" class="candy-next" title="Next Image">'+options.nexttext+'</a><a href="javascript:void(0);" class="candy-prev" title="Previous Image">'+options.prevtext+'</a>').appendTo(bigimg);
		
		$(bigimg).children('.candy-next').click(function() {			
			
			if (options.auto == 'true') {
				clearInterval(timer);
				timer = setInterval(autoNext, options.timeout);
			}
			
			var title = $(thumbs).children('.active-thumb').next('li').children('img').attr('alt');
			var image = $(thumbs).children('.active-thumb').next('li').children('img');
			
			if ($(thumbs).children('.active-thumb').attr('id') == 'candy-last') {
				var image = $(thumbs).children('li:first').children('img');
				var title = $(thumbs).children('li:first').children('img').attr('alt');
			}
			
			if (options.fade == 'true') {
				$(bigimg).children('img').addClass('del-me').stop(true,true);
				$('.del-me').css({
					'position': 'relative',
					'z-index': '2'
				});
				$(image).clone().appendTo(bigimg);
				$('.del-me').siblings('img').addClass('temp');
				$('.del-me').fadeOut(options.fadespeed, function() {
					$(this).remove();
					$('.temp').removeClass('temp');
				});
				$(bigimg).children('img').attr('width', options.maxwidth);
			} else {
				$(bigimg).children('img').remove();
				$(image).clone().appendTo(bigimg);
				$(bigimg).children('img').attr('width', options.maxwidth);
			}
			
			if (options.title == 'true') {
				var galtitle = $(bigimg).children('.gallery-title');
				$(galtitle).text(title);
			}
			
			$(thumbs).children('.active-thumb').removeClass('active-thumb');
			$(image).parent().addClass('active-thumb');						
		});
	
		
		$(bigimg).children('.candy-prev').click(function() {			
			
			if (options.auto == 'true') {
				clearInterval(timer);
				timer = setInterval(autoNext, options.timeout);
			}
			
			var title = $(thumbs).children('.active-thumb').prev('li').children('img').attr('alt');
			var image = $(thumbs).children('.active-thumb').prev('li').children('img');
			
			if ($(thumbs).children('.active-thumb').attr('id') == 'candy-last') {
				var image = $(thumbs).children('li:first').children('img');
				var title = $(thumbs).children('li:first').children('img').attr('alt');
			}
			
			var src = $(thumbs).children('.active-thumb').prev('li').children('img').attr('src');
			
			$(bigimg).children('.candy-next').show();
			
			if (options.fade == 'true') {
				$(bigimg).children('img').addClass('del-me').stop(true,true);
				$('.del-me').css({
					'position': 'relative',
					'z-index': '2'
				});
				$(image).clone().appendTo(bigimg);
				$('.del-me').siblings('img').addClass('temp');
				$('.del-me').fadeOut(options.fadespeed, function() {
					$(this).remove();
					$('.temp').removeClass('temp');
				});
				$(bigimg).children('img').attr('width', options.maxwidth);
			} else {
				$(bigimg).children('img').remove();
				$(image).clone().appendTo(bigimg);
				$(bigimg).children('img').attr('width', options.maxwidth);
			}
			
			if (options.title == 'true') {
				var galtitle = $(bigimg).children('.gallery-title');
				$(galtitle).text(title);
			}
			
			$(thumbs).children('.active-thumb').removeClass('active-thumb');
			$(image).parent().addClass('active-thumb');

		});
		
	}

	$(thumbimg).bind('changeimg',function() {
		
		if (options.auto == 'true') {
			clearInterval(timer);
			timer = setInterval(autoNext, options.timeout);
		}
			
		var title = $(this).attr('alt');
		var image = $(this);
		if (options.fade == 'true') {
			$(bigimg).children('img').addClass('del-me').stop(true,true);
			$('.del-me').css({
				'position': 'relative',
				'z-index': '2'
			});
			$(image).clone().appendTo(bigimg);
			$('.del-me').siblings('img').addClass('temp');
			$('.del-me').fadeOut(options.fadespeed, function() {
				$(this).remove();
				$('.temp').removeClass('temp');
			});
			$(bigimg).children('img').attr('width', options.maxwidth);
		}
		else {
			$(bigimg).children('img').remove();
			$(image).clone().appendTo(bigimg);
			$(bigimg).children('img').attr('width', options.maxwidth);
		}
		$(thumbs).children('.active-thumb').removeClass('active-thumb');
		$(this).parent().addClass('active-thumb');
		$(galtitle).text('');
		$(galtitle).text(title);
		
	});
	

	if (options.changeon == "click") { $(thumbimg).click(function() { $(this).trigger('changeimg'); });}
	else { $(thumbimg).hover(function() { $(this).trigger('changeimg'); }); }
	
  }); 
};
})(jQuery); 
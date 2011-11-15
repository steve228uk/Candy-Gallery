/*
*	Candy Gallery			
*
*	@author:			Stephen Radford, Twitter: @steve228uk
*	@version:			1.3.2
*	@Last Update:		15.11.2011
*	@licence:			MIT (http://www.opensource.org/licenses/mit-license.php)
*						GPL	(http://www.gnu.org/licenses/gpl.html)
*	@documentation:		{to come}
*	@feedback:			stephen.radford@creare.co.uk
*
*/

(function($) {

$.fn.candygallery = function(options) { 
  var defaults = { 
    maxwidth:		203,
    thumbwidth:		50,
    thumbopacity:	0.7,
    title: 'true',
    changeon: 'click',
    thumbposition: 'after',
    fade: 'true',
    fadespeed: 500
  }; 
 
  var options = $.extend({}, defaults, options); 

  return this.each(function() { 
  
    obj = $(this);   
	var img = $(obj).children('img:first-child').attr('src');
	var twidth = parseFloat(options.thumbwidth) + 50;
	
	$(obj).children('img').wrap('<li />');
	$(obj).children('li').wrapAll('<ul class="gallery-ul" />');
	
	var thumbs = $(obj).children('.gallery-ul');
	var thumbimg = $(obj).children('.gallery-ul').children('li').children('img');
	var thumbli = $(obj).children('.gallery-ul').children('li');
	
	$(thumbimg).attr('width', twidth);
	
	if (options.thumbposition == 'after') {
		$(thumbs).before('<div class="big-image"></div>');
	}
	else if (options.thumbposition == 'before') {
		$(thumbs).after('<div class="big-image"></div>');
	}
	
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
	
	if (options.changeon == 'click') {
		$(thumbimg).click(function() {
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
	}
	
	else if (options.changeon == 'hover') {
		$(thumbimg).hover(function() {
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
				
			$(thumbs).childen('.active-thumb').removeClass('active-thumb');
			$(this).parent().addClass('active-thumb');
			$(galtitle).text('');
			$(galtitle).text(title);
		});
	}
	
  }); 
};
})(jQuery); 
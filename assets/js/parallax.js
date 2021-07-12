/****************
	  MOUSE MOVE
	***************/	
	$('html').mousemove(function(e){
		
		var wx = $(window).width();
		var wy = $(window).height();
		
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		
		var newx = x - wx/2;
		var newy = y - wy/2;
		
		$('span').text(newx + ", " + newy);
		
		$('#wrapper div').each(function(){
			var speed = $(this).attr('data-speed');
			$(this).css({
			   'left' : newx*speed,
			   'top' : newy*speed
			});
		});
		
	});
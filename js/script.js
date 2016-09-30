$(document).ready(function() {
	var totalWidth = 0; // sets combined width of images you use
	var positions = new Array(); // to do with animation

	$('#slides .slide').each(function(i) { //traverse through your images
		positions[i] = totalWidth //get slider widths
		totalWidth += $(this).width(); // incrementing totalwidth by adding width of each image width - $(this)

		//check image has a width (in this ap its set in the HTML
		if(!$(this).width()){  //if this image has no width, then...
			alert('Please add a width to your images');
			return false;
		}
	});

	$('#slides').width(totalWidth); // set the width to totalWidth

	//Menu item click handler
	$('#menu ul li a').click(function(e, keepScroll){
		//change class of #menu li items
		$('li.product').removeClass('active').addClass('inactive'); 
		//Add 'active' class to parent
		$(this).parent().addClass('active');

		var pos = $(this).parent().prevAll('.product').length; //determine the current index position of an element

		$('#slides').stop().animate({marginLeft:-positions[pos] + 'px'}, 450);

		//prevent default action on link
		e.preventDefault(); //e came from click handler param defined in line 19

		// Stop autoscroll
		if(!autoScroll) clearInterval(itvl);
	});
	
	// Make first image active
	$('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');
	
	// Auto Scroll
	var current=1;
	function autoScroll(){
		if(current == -1) return false;
		
		$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true]);
		current++;
	}
	
	// Duration for auto scroll
	var duration = 10;
	var itvl = setInterval(function(){autoScroll()}, duration * 300);
});







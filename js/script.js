$(document).ready(function(){
	//set options
	var speed = 500; 				//fade speed
	var autoSwitch = true; 			//auto slider option
	var autoSwitchSpeed = 4000; 	//auto slider speed

	//add initial active class
	$('.slide').first().addClass('active');

	//hide all slides
	$('.slide').hide();

	//show first slide
	$('.slide').first().show();

	//next handler
	$('#next').on('click', nextSlide);

	//prev handler
	$('#prev').on('click', prevSlide);

	//auto slide handler
	if(autoSwitch == true){
		setInterval(nextSlide, autoSwitchSpeed);
	}

	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');

		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else{
			$('.oldActive').next().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);	
	}

	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');

		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else{
			$('.oldActive').prev().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});
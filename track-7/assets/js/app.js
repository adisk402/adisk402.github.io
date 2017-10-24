$('.nav-item').click(function() {
	var button_name = $(this).data('button');
	

	$('.nav-item').removeClass('active');
	
	$(this).addClass('active');

	if (button_name == 'random') {
		$('.lightbox').removeClass('hide');
		
	}
	});

$('.close-button').click(function() {
	$('.lightbox').addClass('hide');
	$('.nav-item.random').removeClass('active');
});








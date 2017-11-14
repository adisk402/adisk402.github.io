$('.button').click(function(){
	var objects= ['assets/img/1.png',
				  'assets/img/2.png',
				  'assets/img/3.png',
				  'assets/img/4.png',
				  'assets/img/5.png',
				  'assets/img/6.png',
				  'assets/img/7.png',
				  'Death',
				  'Rise',
				  'Find',
				  '...'

	];

	var color= ['red',
	            'green',
	            'blue'
                  
	]; 

	var random_object_number= Math.floor(Math.random() * objects.length);
	var random_color_number= Math.floor(Math.random() * color.length);
	var object_to_use = objects[random_object_number];
	var color_to_use = color[random_color_number];


	var result = '';

	if (random_object_number < 7){
		 result = '<div class="object"><img src="' + object_to_use + ' "/>';
	$('.content').prepend(result);
	} else {
		 result = '<div class="object ' + color_to_use + '">' + object_to_use + '</div>';
	$('.content').prepend(result);
	}
		
 
	
});








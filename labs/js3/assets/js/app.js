//v-item').click(function() {
// ($(this).hasClass('apple-button')){
//'.apple').removeClass('hide');
// if ($(this).hasClass('nike-button')){
//'.nike').removeClass('hide');
//
//se if ($(this).hasClass('disney-button')){
//'.disney').removeClass('hide');
//
//se {
//'.vogue').removeClass('hide');
//
//

//$('.nav-item').click(function(){
//	var target_horse = $(this).data('horse');
//	$(target_horse).removeClass('hide');
//});

//$('.nav-item').click(function(){
//	var target = $(this.data('horse');
//		if(target == 'apple') {
//			img_to_show = '<img class="apple hide" src="assets/img/apple.png" />';
//		}
//		else if (target == 'nike') {
//			img_to_show = '<img class="nike hide" src="assets/img/nike.png" />';
//		}
//		else if (target == 'disney') {
//			img_to_show = '<img class="disney hide" src="assets/img/disney.png" />';
//		}
//		else (target == 'vogue') {
//			img_to_show = '<img class="vogue hide" src="assets/img/vogue.png" />';
//		}
//
//		$('content'). append(img_to_show);
//
//});

//<img class="apple hide" src="assets/img/apple.png"/>
// <img class="nike hide" src="assets/img/nike.png"/>
// <img class="disney hide" src="assets/img/disney.png"/>
// img class="vogue hide" src="assets/img/vogue.png"/>



$('.nav-item').click(function() {
	var img = $(this).data('img');
	var class_name = $(this).data('classname')
	var img_to_show = '<div class="' + class_name + ' logo"><img src="assets/img/' + img + '" /><div>';
	
	$('.content').prepend(img_to_show);
});
jQuery(function($){
	$('#angka').keyup(function(){
		$('.hasil').html($(this).val());
	});
});
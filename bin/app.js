jQuery(function($){
	angka = '';
	$('#angka').keyup(function(){
		angka = $(this).val();
		
		if ($('.hasil').html() == ''){
			$('.hasil').html('0');
		}
	});
});
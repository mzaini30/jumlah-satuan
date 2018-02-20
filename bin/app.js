jQuery(function($){
	$('#angka').keyup(function(){
		angka = $(this).val();
		pecah = angka.split('');
		if ($('.hasil').html() == ''){
			$('.hasil').html('0');
		}
	});
});
jQuery(function($){
	angka = '';
	$('#angka').keyup(function(){
		angka = $(this).val();
		$('.hasil').html(angka);
		if ($('.hasil').html() == ''){
			$(this).html('0');
		}
	});
});
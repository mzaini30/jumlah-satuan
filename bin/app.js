jQuery(function($){
	$('#angka').keyup(function(){
		angka = $(this).val();
		pecah = angka.split('');
		jumlah = 0;
		for (n in pecah){
			jumlah += Number(pecah[n]);
		}
		$('.hasil').html(jumlah);
		if ($('.hasil').html() == ''){
			$('.hasil').html('0');
		}
	});
});
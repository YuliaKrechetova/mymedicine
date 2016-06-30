// TryjQuery, level 1
$(document).ready(function(){
	$('.learn-more').text('Открыть полную инструкцию');

	$('.medicine__price').on('click', '.show-price', function() {
		var price = $(this).closest('.all-medicine-wrapper__medicine').data('price');
		$(this).after('Цена: ' + price + ' руб.');
		$(this).closest('.show-price').remove();
	});
	//Почему нажатие на кнопку удаляет цену от предыдущего нажатия,
	//если цена выставлена хардкодом через вставку параграфа?

	function hideMedicines () {
		$('.all-medicine-wrapper__medicine').hide();
	}

	$('.filters').on('click', '.filter_antibiotic', function() {
		hideMedicines();
		$('.medicine__tags').find('.filter_antibiotic').closest('.all-medicine-wrapper__medicine').show();
	});
	$('.filters').on('click', '.filter_antivirus', function() {
		hideMedicines();
		$('.medicine__tags').find('.filter_antivirus').closest('.all-medicine-wrapper__medicine').show();
	});
	$('.filters').on('click', '.filter_antiseptic', function() {
		hideMedicines();
		$('.medicine__tags').find('.filter_antiseptic').closest('.all-medicine-wrapper__medicine').show();
	});
	$('.filters').on('click', '.filter_nose', function() {
		hideMedicines();
		$('.medicine__tags').find('.filter_nose').closest('.all-medicine-wrapper__medicine').show();
	});
	$('.filters').on('click', '.filter_throat', function() {
		hideMedicines();
		$('.medicine__tags').find('.filter_throat').closest('.all-medicine-wrapper__medicine').show();
	});
	$('.filters').on('click', '.filter_anti-pain', function() {
		hideMedicines();
		$('.medicine__tags').find('.filter_anti-pain').closest('.all-medicine-wrapper__medicine').show();
	});
	$('.filters').on('click', '.filter_spray', function() {
		hideMedicines();
		$('.medicine__tags').find('.filter_spray').closest('.all-medicine-wrapper__medicine').show();
	});
	$('.filters').on('click', '.filter_local-anti-pain', function() {
		hideMedicines();
		$('.medicine__tags').find('.filter_local-anti-pain').closest('.all-medicine-wrapper__medicine').show();
	});
	$('.filters').on('click', '.filter_anti-inflammatory', function() {
		hideMedicines();
		$('.medicine__tags').find('.filter_anti-inflammatory').closest('.all-medicine-wrapper__medicine').show();
	});
	$('.filters').on('click', '.filter_vasculomotor', function() {
		hideMedicines();
		$('.medicine__tags').find('.filter_vasculomotor').closest('.all-medicine-wrapper__medicine').show();
	});

	$('.cancel-filter').on('click', function() {
		$('.all-medicine-wrapper__medicine').show();
	});

	$('.medicine-detailed__side-effect').on('click', '.more', function() {
		$(this).find('ul').slideDown();
	});
});
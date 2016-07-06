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

	function filterTag(tag) {			
		$('.filters').on('click', tag, function() {	
			$('.all-medicine-wrapper__medicine').hide();		
			$('.medicine__tags').find(tag).closest('.all-medicine-wrapper__medicine').show();
		});	
	};

	filterTag('.filter_antibiotic');
	filterTag('.filter_antivirus');
	filterTag('.filter_antiseptic');
	filterTag('.filter_nose');
	filterTag('.filter_throat');
	filterTag('.filter_anti-pain');
	filterTag('.filter_spray');
	filterTag('.filter_local-anti-pain');
	filterTag('.filter_anti-inflammatory');
	filterTag('.filter_vasculomotor');
	filterTag('.cancel-filter');

	// А сначала я для каждого клика отдельно написала, пока не поняла, как работают параметры функции...
	// $('.cancel-filter').on('click', function() {
	// 	$('.all-medicine-wrapper__medicine').show();
	// });

	// Это я сначала без аякса спрятанный блок показывала
	// $('.medicine-detailed__side-effect').on('click', 'button', function() {
	// 	$(this).text('Свернуть');
	// 	$(this).closest('.medicine-detailed__side-effect').find('ul').slideDown();
	// });

	$('.medicine-detailed__side-effect').on('click', 'button', function() {
		$.ajax({
			url: 'amoksiklav-side-effects.html',
		}).done(function(response) {
			$('.medicine-detailed__side-effect > p').html(response).slideDown();
		}).fail(function(request, errorType, errorMessage) {
			alert('Error: ' + errorType + errorMessage);
		}).always(function (xhr, status) {
		    $.fancybox.hideLoading(); // А когда она должна показаться-то?
		});
	});
});
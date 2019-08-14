// Обработка и отправка формы через AJAX
$('#offer-form').on('submit', function (event) {
	event.preventDefault();
	$.ajax({
		url: 'mail.php',
		type: 'POST',
		data: $(this).serialize(),
		success: function (data) {
			$('.success').html(data + ', Ваша форма отправлена!');
		}
	});
});
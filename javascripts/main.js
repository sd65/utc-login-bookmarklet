$(document).ready(function () {

	$('input[name=username]').on('change', function() { 
		$('#usernameField').html($(this).val());
	});

});
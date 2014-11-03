$(document).ready(function () {

	$('input[name=username]').change(function() { 
		$('#usernameField').html($(this).val());
	});

});
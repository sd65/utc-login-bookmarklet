$(document).ready(function () {

	$('input[name=username]').keyup(function() { 
		$('#usernameField').html($(this).val());
	});

});
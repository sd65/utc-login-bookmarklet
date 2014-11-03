$(document).ready(function () {

	$('input[name=username]').change(function(input) { 
		$('#usernameField').html(input)
	});

});
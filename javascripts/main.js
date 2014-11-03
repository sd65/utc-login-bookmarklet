$(document).ready(function () {

	$('input[name=username]').keyup(function() { 
		$('#usernameField').html($.trim($(this).val()));
	});

	$('input[name=password]').keyup(function() { 
		$('#passwordField').html($.trim($(this).val()));
	});

});
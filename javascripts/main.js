$(document).ready(function () {

	function updateDragMe() {
		$('#dragMe').attr('href', encodeURIComponent($('#code').text()));
	}

	$('input[name=username]').keyup(function() { 
		$('#usernameField').html($.trim($(this).val()));
		updateDragMe();
	});

	$('input[name=password]').keyup(function() { 
		$('#passwordField').html($.trim($(this).val()));
		updateDragMe();
	});

});
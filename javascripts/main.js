$(document).ready(function () {

	function updateDragMe() {
		$('#dragMe').attr('href', $('#code').text());
		if ($('input[name=username]').text() != "" && $('input[name=password]').text() != "" ) $('#dragMe').css("opacity", 1);
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
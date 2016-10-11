$(document).ready(function(){
	$(".header").on('click', function(){
		$(".content").removeClass("show")
		$(this).find("+ .content").addClass("show")
	})
})
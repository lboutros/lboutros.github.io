$(document).ready(function() {
	$('#button-about').click(function(){
		$("#about-modal").toggleClass("visible");
		$(".modal1").toggleClass("visible");
	});
	});

$(document).ready(function(){
	$(".modal1").click(function(){
		$("#about-modal").toggleClass("visible");
		$(".modal1").toggleClass("visible");		
	});
});

$(document).ready(function() {
	$('#button-what-is').click(function(){
		$("#definition-modal").toggleClass("visible");
		$(".modal2").toggleClass("visible");
	});
	});

$(document).ready(function(){
	$(".modal2").click(function(){
		$("#definition-modal").toggleClass("visible");
		$(".modal2").toggleClass("visible");	
	});
});

$(document).ready(function() {
	$('#button-videos').click(function(){
		$("#videos-modal").toggleClass("visible");
		$(".modal3").toggleClass("visible");
	});
	});

$(document).ready(function(){
	$(".modal3").click(function(){
		$("#videos-modal").toggleClass("visible");
		$(".modal3").toggleClass("visible");	
	});
});

$(document).ready(function(){
	$(".modal4").click(function(){
		$("#game-objective-modal").toggleClass("invisible");
		$(".modal4").toggleClass("invisible");	
	});
});

$(document).ready(function() {
	$('#button-colophon').click(function(){
		$("#colophon-modal").toggleClass("visible");
		$(".modal").toggleClass("visible");
	});
	});

$(document).ready(function(){
	$(".modal").click(function(){
		$("#colophon-modal").toggleClass("visible");
		$(".modal").toggleClass("visible");	
	});
});

$(document).ready(function() {
	$('#exit-to-play-button').click(function(){
		$("#game-objective-modal-modal").toggleClass("visible");
		$(".modal6").toggleClass("visible");
	});
	});

$(document).ready(function(){
	$(".modal6").click(function(){
		$("#game-objective-modal").toggleClass("visible");
		$(".modal6").toggleClass("visible");	
	});
});


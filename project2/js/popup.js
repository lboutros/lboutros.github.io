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


////////////////////////////////////////// ARRAY LOOP /////////////////////////////////////


// var dolch = ["brown", "carry", "where", "three", "funny"]

// $("#tap-right").click(
// 		function(){
// 			for(i = 0; i < dolch.length; i++){
// 				if(dolch[i] = "brown"){
// 				$(".word-container").text(dolch[i]);
// 	});
// });

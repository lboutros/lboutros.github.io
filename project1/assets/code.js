/* basic */
$(document).ready(function(){
		/* hover template */

	$("#blank").hover(
		function(){
			console.log("mouseenter");
			$("#pink-square").addClass("hover-color");
			$("#pink-square").removeClass("non-hover-color");
		}, function(){
			console.log("mouseleave");
			$("#pink-square").removeClass("hover-color");
			$("#pink-square").addClass("non-hover-color");
		}
	);

	$("#blank").click(
		function(){
			$("#blank").removeClass("hover");
		}


	);
});
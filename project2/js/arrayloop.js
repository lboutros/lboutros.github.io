
var dolch = ["brown", "carry", "where", "three", "funny"];

var wordIndex = 1;

function nextWord(){
	$(".word-container").text(dolch[wordIndex]);
	wordIndex++;
	$("#button-game-feedback").val("check");
	$("#button-spell").val("");
	$(".tap-right-button").toggleClass("visible");
	if(wordIndex == dolch.length){
		wordIndex = 0;
	}
}


function testRun(){
	console.log("word");
	var wordContainer = $(".word-container").text();
	var wordSpelled = $("#button-spell").val();

	if(wordContainer == wordSpelled){
		$("#button-game-feedback").val("correct!");
		$(".tap-right-button").toggleClass("visible");
	}
	else{
		$("#button-game-feedback").val("try again!");

	}
}





// for(i = 0; i < dolch.length; i++){
// 	if(dolch[i] = "carry"){
// 		console.log(dolch[i])
// 	}
// }


// ////////////////////////////////////////// ARRAY LOOP /////////////////////////////////////


// $("#tap-right").click(
// 		function(){
// 			for(i = 0; i < dolch.length; i++){
// 				if(dolch[i] = "brown"){
// 				$(".word-container").text(dolch[i]);
// 	});
// });

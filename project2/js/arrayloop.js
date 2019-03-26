
var dolch = ["brown", "carry", "where", "three", "funny"];
var audioNames = ['assets/pronunciation_en_brown.mp3', "assets/pronunciation_en_carry.mp3", "assets/pronunciation_en_where.mp3", "assets/pronunciation_en_three.mp3", "assets/pronunciation_en_funny (1).mp3"]

var wordIndex = 0;

function nextWord(){
	wordIndex++;
		if(wordIndex == dolch.length){
		wordIndex = 0;
		}
	$(".word-container").text(dolch[wordIndex]);
	$("#button-game-feedback").val("check");
	$("#button-spell").val("");
	$(".tap-right-button").toggleClass("visible");
}


function playAudio(){
	var audio = new Audio(audioNames[wordIndex]);
	audio.play();	
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

var dolch = ["brown", "carry", "where", "three", "funny"]

for(i = 0; i < dolch.length; i++){
	if(dolch[i] = "carry"){
		console.log(dolch[i])
	}
}

// on click, go to next item in array

////////////////////////////////////////// ARRAY LOOP /////////////////////////////////////


var dolch = ["brown", "carry", "where", "three", "funny"]

$("#tap-right").click(
		function(){
			for(i = 0; i < dolch.length; i++){
				if(dolch[i] = "brown"){
				$(".word-container").text(dolch[i]);
	});
});

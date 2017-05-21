// array of words


var words=[
"math", "random", "guess"
]
//select word from array

var random = Math.floor( (Math.random() * words.length)  + 1 );
//words[random]=letter
console.log('random: ', random)
var selectWord = words[random];
console.log('selectWord: ', selectWord)

//break chosen word into letters
 var wordArray = [];

 for(var i = 0; i<selectWord.length; i++){
 	//next line adds each letter
 	wordArray.push(selectWord[i]);
 	// console.log(wordArray);
 }
	console.log(wordArray);

//put right number of spaces on HTML
var dashes = " ";
for (var j = 0; j < selectWord.length; j++){
	console.log("inside second for-loop");
	//adding dashes for each letter of var words
	dashes = dashes + "_ "};
	//short hand --> dashes += "_";	

console.log("dashes", dashes)
var wordDisplay = document.getElementById("wordDisplay");
console.log("wordDisplay: ", wordDisplay);
//document.getElementById('mydiv')--line25-.innerHTML = '<span class="prego">Something</span>';
wordDisplay.innerHTML = '<h1> dashes:' + dashes + '</h1>';

				//ask about inserting the corrected guess letters

//function that checks user letter entry within word
var userGuess = "";
var replaceDash = [];
var wrongGuess= [];
var wordIndex
var blankIndex

function letterCheck(){
	for (i = 0; i < selectWord.length; i++) {
		// console.log(selectWord[i])
		if (selectWord[i] === userGuess) {
			replaceDash.push(i)
		} else {wrongGuess.push(selectWord[i])
		}
	}
	console.log(wrongGuess);
}
	
var wrongLetterDisplay = document.getElementById("wrongletters1").innerHTML 

function wrongGuess (){
	for (i=0; i<selectWord.length; i++){
		if (selectWord[i] != userGuess){//selectWord index comparing userGuess
			wrongGuess.push(userGuess);//userGuess is being pushed to wrongGuess
			wrongLetterDisplay += userGuess;
			// wrongLetterDisplay = wrongLetterDisplay + "m"

		}
	}
}
document.onkeyup=function(event){
	userGuess = event.key;
	letterCheck();
} 

var correctGuess = function()




// 			 01234
// var shown = "guess"

// 			  01234
// var hidden = "-----"

// shown[1
// ]







//reset function if this.guess Guess>8{
	//this.reset



// letterCheck();
//keep track of letters that were selected



//dont do following until user guess is displayed

//keep track of how many guesses are left

//keep track of letter wins



/*** Pokemon arry and its objects ***/

var passwordArray = [
    {
        word: "atomic",
        image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Stylised_atom_with_three_Bohr_model_orbits_and_stylised_nucleus.svg/200px-Stylised_atom_with_three_Bohr_model_orbits_and_stylised_nucleus.svg.png",
        image2: "https://pbs.twimg.com/profile_images/604006309873225728/_VIOSV96.png"
    },

    {
        word: "nuclear",
        image1: "https://r.hswstatic.com/w_907/gif/what-would-nuclear-winter-be-like-1.jpg",
        image2: "https://www.esi-africa.com/wp-content/uploads/2016/09/Nuclear-image.jpg"
    },

    {
        word: "military",
        image1: "https://images04.military.com/sites/default/files/media/join-the-military/2015/11/junglepatrol.jpg",
        image2: "https://images04.military.com/sites/default/files/media/join-the-military/2015/11/junglepatrol.jpg"
    },

    {
        word: "university",
        image1: "https://cdn.the-scientist.com/assets/articleNo/64292/iImg/26721/a6aab0fc-06c7-4bf9-8d4e-d52de026550e-uni-640.jpg",
        image2: "https://cdn.the-scientist.com/assets/articleNo/64292/iImg/26721/a6aab0fc-06c7-4bf9-8d4e-d52de026550e-uni-640.jpg"
    },

    {
        word: "hotel",
        image1: "https://s-ec.bstatic.com/images/hotel/max1280x900/101/101430248.jpg",
        image2: "https://s-ec.bstatic.com/images/hotel/max1280x900/101/101430248.jpg"
    },

    {
        word: "russia",
        image1: "http://cdn4.spiegel.de/images/image-95693-640_panofree-itrp-95693.jpg",
        image2: "http://cdn4.spiegel.de/images/image-95693-640_panofree-itrp-95693.jpg"
    },

    {
        word: "machine",
        image1: "https://pbs.twimg.com/profile_images/739515667737645056/Rg0anujY_400x400.jpg",
        image2: "https://pbs.twimg.com/profile_images/739515667737645056/Rg0anujY_400x400.jpg"
    }]

// gameStatus variable  for starting and stopping the game. set the var to a falsy
var gameStatus = false;

// generates randomNumber variable
var randomNumber = Math.floor(Math.random() * passwordArray.length);

// applies the var randomNumber to obtain random answer ojbect form my pokemonArray
var password = passwordArray[randomNumber].word;
var passwordImage1 = passwordArray[randomNumber].image1
var passwordImage2 = passwordArray[randomNumber].image2

// shows array length of pokemon variable to determin the letters remaining
var lettersRemaining = password.length;

// creates answer that can have values pushed into
var answerArray = [];

/*** event listeners ***/

// on key event listeners that does an onkeyup event
document.addEventListener("keyup", function(event){

  if(gameStatus) {
    letterCheck(event);

  } else {
      init();
  }
});

// setup letter check array
var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"];

function letterCheck(guess) {

  if (alphabetArray.indexOf(guess.key) > -1) {
    correctGuessCheck(guess);
  }
}

//checks if guess is correct

var winScore = 0;
var lossesShown = 0;
function correctGuessCheck(guess) {

  if (password.indexOf(guess.key) >= 0) {
    correctGuess(guess);

  } else {
      incorrectGuess(guess);
  }
}

function correctGuess(guess) {

  if (answerArray.indexOf(guess.key.toUpperCase()) < 0) {
    addCorrectLetter(guess);
  }
}

function addCorrectLetter(guess) {
  for (var l = 0; l < password.length; l++) {

    // if the letter matches an existing letter in the answer this if statement pushes the correct letter to answerArray in upperCase method
    if (guess.key === password[l]) {
      answerArray[l] = guess.key.toUpperCase();
      displayCurrentWord();
      lettersRemaining--;

      // if all letters have been guess this conditional makes user wins go up
      if (lettersRemaining === 0) {
        winScore++;

        displayWins();
        changeImage();
        addCorrect();
        displayCurrentWord();
      }
    }
  }
}

//creates incorrect guesses array
var incorrectGuessesMade = [];

// creates the number of guesses var
var guessesLeft = 6;

function incorrectGuess(guess) {
  if (incorrectGuessesMade.indexOf(guess.key.toUpperCase()) < 0) {
    addIncorrectLetter(guess);
  }
}

function addIncorrectLetter(guess) {

  // push incorrect guess to incorrectGuessesMade array
  incorrectGuessesMade.push(guess.key.toUpperCase());

  // displays if incorrect letter is guessed
  displayGuessesMade();
  guessesLeft--;

  // shows guesses left
  displayGuessesLeft();
  if (guessesLeft === 0) {
    lossesShown++;

    changeImage();
    displayLosses();
    displayAnswer();
  }
}

/*** Functions ***/

// displays number of wins
function displayWins() {
  var winsDisplay = document.querySelector("#winsDisplay");
  winsDisplay.textContent = winScore;
}

// displays number of losses
function displayLosses() {
  // var lossesShown = 0;
  var lossesDisplay = document.querySelector("#lossesDisplay");
  lossesDisplay.textContent = lossesShown;
}

// displays letters already guessed
function displayGuessesMade() {
  var guessesMadeDisplay = document.querySelector("#guessesMadeDisplay");
  guessesMadeDisplay.textContent = incorrectGuessesMade.join(", ");
}

// displays how many remaining guesses are left
function displayGuessesLeft() {
  var guessesLeftDisplay = document.querySelector("#guessesLeftDisplay");
  guessesLeftDisplay.textContent = guessesLeft;
}

// displays current solvd state of answerArray
function displayCurrentWord() {
  var currentWordDisplay = document.querySelector("#currentWordDisplay");
  currentWordDisplay.innerHTML = answerArray.join(" ");
}

// displays silhouette of pokemon like who's that pokemon
function displayImage() {
  var pictureDisplay = document.querySelector("#pictureDisplay");
  pictureDisplay.src = passwordImage2;
}

// reveals pokemon identiy on win or loss
function changeImage() {
  var pictureDisplay = document.querySelector("#pictureDisplay");
  pictureDisplay.src = passwordImage1;
  gameStatus = false;
}

// showS answer if user fails
function displayAnswer() {
  var revealedAnswerDisplay = document.querySelector("#revealedAnswerDisplay");
  revealedAnswerDisplay.textContent = password.toUpperCase();
}

// turns current word to green
function addCorrect() {
  var currentWordDisplay = document.querySelector("#currentWordDisplay");
  currentWordDisplay.classList.add('correct');
}

// removes green color when restarting guess game
function removeCorrect() {
  var currentWordDisplay = document.querySelector("#currentWordDisplay");
  currentWordDisplay.classList.remove('correct');
}


/* Starting and restarting the game functions */

function init() {

  // changes gaemStatus to true
  gameStatus = true;

  // generates random number with math.floor and multiplying array's length
  randomNumber = Math.floor(Math.random() * passwordArray.length);

  // apply randomNumber to fetch random word which is the answer, and its synced Images

  password = passwordArray[randomNumber].word;
  passwordImage1 = passwordArray[randomNumber].image1;
  passwordImage2 = passwordArray[randomNumber].image2;

  // shows the arrany length for lettersRemaining till the win
  lettersRemaining = password.length;

  // sets the array to an empty string
  answerArray = [];

  // for loop converts word answer into an array instead of using a push command. pushes the length and increments
  for (var i = 0; i < password.length; i++) {
    if (password[i] === "+") {
      answerArray[i] = "&nbsp;";
    } else {

      //this makes sure a string value of _ is show isntead of the actual word
      answerArray[i] = "_";
      }
    }

    lettersRemaining = pokemon.length;

    // value for how many guesses you get
    guessesLeft = 6;
    displayGuessesLeft()

    // restarts guessesMade array like executing functions from jQuery calculator
    incorrectGuessesMade = [];
    displayGuessesMade()

    displayCurrentWord();
    displayImage();

    // empites the text content for revealedAnswerDisplay
    revealedAnswerDisplay.textContent = "";

    // pllays audio for the clip whos that pokemon?
    document.getElementById('MissionImpossible').play();

    document.getElementById("playMusic").addEventListener("click", function(){
      document.getElementById("MissionImpossible").play();
    });

    document.getElementById("pauseMusic").addEventListener("click", function(){
      document.getElementById("MissionImpossible").pause();
    });

    // removes correct color on word when finished and restarting game
    removeCorrect();
}

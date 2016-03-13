// =============================================================================
// Some example variables to get you started. The first three are the elements
// in the index.html file. The last is for storing the computer's number. You
// can see how they are being used below. I recommend keeping these as they are.
// You may want to add more.
// =============================================================================

var msgDisplayEl = document.getElementById('msgDisplay');
var userInputEl = document.getElementById('userInput');
var submitBtnEl = document.getElementById('submitBtn');
var number;
var guessNumber = 1;

// =============================================================================
// Some example functions, to get you started. You can change, delete, add to
// these however you like!
// =============================================================================

function generateNumber() {
  number = Math.round(100*Math.random());
  console.log(number);
  return number;
};

function clearInput() {
  userInputEl.value = '';
};

function playAgain() {
  console.log(3);
  submitBtnEl.value = "Start";
  msgDisplayEl.innerHTML = "Welcome to the number guessing game! Please press Start to begin!";
  document.getElementById('playAgainBtn').style.display = 'none';
}

// =============================================================================
// The guessing game. Everytime the user clicks the button on the page, this
// function will run. Don't change the name of it unless you change the
// corresponding name of the function in the html doc. There's really no reason
// to do that.
// You can see that the guessingGame function is receiving userInput. If you're
// feeling overwhelmed, you can just trust that that is always true for this
// program, but I promise it's not magical. Go look around at the index.html
// file if you want to try and figure out how that's happnening.
// Change any and all of this code (except the name and the parameter)! Good
// Luck!
// =============================================================================

function guessingGame(userInput) {
  console.log(1);
  //If the user has yet to type anything in when they hit the button
  if (!userInput) {
    //If the button says "Start", run this code
    if (submitBtnEl.value === "Start") {
      //Calls the generate number program so that it can get a number ready.
      number = generateNumber();
      submitBtnEl.value = "Submit";
      msgDisplayEl.innerHTML = "Please guess a number between 1 and 100.";  
    }
  //If, by some miracle, the user guesses correctly, run this code
  } else if (userInput === number.toString()) {
    if (guessNumber === 1){
        msgDisplayEl.innerHTML = "Wow, you got that on the first try! It's almost like you looked in the console or something..."
    } else {
      msgDisplayEl.innerHTML = "Great job guessing the number! It took you "+guessNumber+" guesses."
    }
    //Calls the clearInput function to, well, clear the input
    clearInput();
    //Just testing to make sure the input works, don't mind me
    console.log(2);
    document.getElementById('playAgainBtn').style.visibility = 'visible';
  } else {
    //Just a check if things are too low
    if (userInput < number.toString()) {
      msgDisplayEl.innerHTML = "Oops, you were a little low with your guess. Please try again!"
      guessNumber++;
    }
    //Just a check if things are too high
    else if (userInput > number.toString()) {
      msgDisplayEl.innerHTML = "Oops, you were a little high with your guess. Please try again!"
      guessNumber++;
    }
  }
}
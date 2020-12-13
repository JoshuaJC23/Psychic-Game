
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = "";
var computerGuess = "";

function getRandomLetter() {
    computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(computerGuess);
    return computerGuess;
};

var winnerPoints = document.getElementById("wins");
var loserPoints = document.getElementById("Losses");
var remainingGuess = document.getElementById("GuessesLeft");
var lettersGuessed = document.getElementById("GuessesSoFar");

// output to screen
winnerPoints.textContent = wins;
loserPoints.textContent = losses;
remainingGuess.textContent = guessesLeft;
lettersGuessed.textContent = guessesSoFar;

document.onkeyup = function (event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if (guessesSoFar.indexOf(userGuess) > -1) {
        return;
    }
    guessesSoFar += " " + userGuess;

    console.log(getRandomLetter);

    if ((userGuess === "a") ||(userGuess === "b") || (userGuess === "c") || (userGuess === "d") ||
    (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") ||
    (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") ||
    (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") ||
    (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") ||
    (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess == "x") ||
    (userGuess === "y") || (userGuess === "z")){
    if (userGuess === computerGuess) {
        wins++;
        getRandomLetter();
        guessesLeft = 10;
        guessesSoFar = "";
        alert("Your psychic abilities are out of this world!");
    }
    else {
        guessesLeft--;
        userGuess.indexOf(guessesSoFar) - 1;
    }
    if (guessesLeft === 0) {
        //user loses
        losses++;
        guessesLeft = 10;
        guessesSoFar = "";
        alert("Your psychic skills needs more improvement.");
    }

    //output to screen
    winnerPoints.textContent = wins;
    loserPoints.textContent = losses;
    remainingGuess.textContent = guessesLeft;
    lettersGuessed.textContent = guessesSoFar;
}

};


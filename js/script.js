const guessedLettersElement = document.querySelector(".guessed-letters"); //unordered list for guessed letters
const guessLetterButton = document.querySelector(".guess"); //guess button
const letterInput = document.querySelector(".letter"); //text input box for letters
const wordInProgress = document.querySelector(".word-in-progress"); // paragraph where word in progress appears
const remainingGuessesElement = document.querySelector(".remaining"); //paragraph where remaining guesses will display
const remainingGuessesSpan = document.querySelector(".remaining span"); //span inside the paragraph with remaining guesses
const message = document.querySelector(".message"); //paragraph where messages will appear when player guesses a letter
const playAgainButton = document.querySelector(".play-again"); // button prompting player to play again

const word = "magnolia"; 
const guessedLetters = [];

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
}

placeholder(word); 

guessLetterButton.addEventListener("click", function(e) {
    e.preventDefault();
    message.innerText = "";
    const guess = letterInput.value;
    
    //step 5 of the "create a function to capture input" is supposed to go here
    const goodGuess = validatePlayerInput(guess);

    if (goodGuess) {
       makeGuesses(guess);
    }
    letterInput.value = "";

});

const validatePlayerInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Only one guess at a time!"
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Try a letter from A-Z."
    } else {
        return input;
    }
}

const makeGuesses = function(guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You've already guessed that letter. Try another one.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    } 
};

const showGuessedLetters = function () {
    guessedLettersElement.innerHTML = "";
    
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
 };

 const updateWordInProgress = function(guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];

    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }
    //console.log(revealWord);
    wordInProgress.innerText = revealWord.join("");
    wonGame();
};

//Function to check if player has won
const wonGame = function() {
       
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }

};
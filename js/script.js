const guessedLetters = document.querySelector(".guessed-letters"); //unordered list of player's guessed letters
const guessLetterButton = document.querySelector(".guess"); // button with the text "Guess" on it
const letterInput = document.querySelector(".letter"); // text input where player will guess a letter
const wordInProgress = document.querySelector(".word-in-progress"); //empty paragraph where word in progress will appear
const remainingGuessesElement = document.querySelector(".remaining"); // remaining guesses
const remainingGuessesSpan = document.querySelector(".remaining span"); //span showing number of remaining guesses
const message = document.querySelector(".message"); //empty paragraph where messages will appear when the player guesses a letter
const playAgainButton = document.querySelector(".play-again"); //byttin prompting player to play again

const word = "magnolia";

//Display our symbols as placeholders for the chose word's letters
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});

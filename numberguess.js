let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomnum = Math.ceil(Math.random() * 100);
console.log(randomnum)

function checkGuess() {

    let guessnum = parseInt(userInput.value);
    if (guessnum > randomnum) {
        gameResult.textContent = "Too! High Your Closer";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessnum < randomnum) {
        gameResult.textContent = "Too! Low Your Closer";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessnum === randomnum) {
        gameResult.textContent = "Congratulations!! Your Right "
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Enter Valid Input "
        gameResult.style.backgroundColor = "red";
    }
}
let computerSecret;
let userGuess = 35;

computerSecret = parseInt(Math.random() * 100);
if (userGuess === computerSecret) {
    console.log("congratulations! you win!! you guessed the number!");
} else if (userGuess > computerSecret) {
    console.log("too high");
} else {
    console.log("too low");
}
let maximum = parseInt(prompt('Enter the max number'));
while (!maximum) {
    maximum = parseInt(prompt('Enter the max number'));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('Enter your first guess'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Your guess was too high. Enter another guess');
    } else {
        guess = prompt('Your guess was too low. Enter another guess');
    }
}

alert(`you win!... it took you ${attempts} to guesses.`);

import inquirer from 'inquirer';
function startGame() {
    let maxAttempts = 5; // You can change the maximum number of attempts
    let attempts = 0;
    const generatedNumber = Math.floor(Math.random() * 10);
    function playRound() {
        inquirer.prompt([
            {
                type: 'number',
                name: 'userGuess',
                message: `Guess the number between 1 to 10 (Attempts left: ${maxAttempts - attempts}):`
            }
        ]).then((answers) => {
            const userGuess = answers.userGuess;
            attempts++;
            if (userGuess === generatedNumber) {
                console.log('Congrats! You won the game.');
                playAgain();
            }
            else if (attempts < maxAttempts) {
                console.log('Try again.');
                playRound();
            }
            else {
                console.log(`Sorry, you've reached the maximum number of attempts. The number was ${generatedNumber}.`);
                playAgain();
            }
        });
    }
    playRound();
}
function playAgain() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'playAgain',
            message: 'Play again?'
        }
    ]).then((answers) => {
        if (answers.playAgain) {
            startGame();
        }
        else {
            console.log('Thanks for playing! Goodbye.');
            process.exit();
        }
    });
}
startGame();

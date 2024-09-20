const gameContainer = document.getElementById('game-container');

// Create a 5x6 grid for the game (Wordle has 6 guesses, each with 5 letters)
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
        const letterBox = document.createElement('div');
        letterBox.classList.add('letter-box');
        gameContainer.appendChild(letterBox);
    }
}

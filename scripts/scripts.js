
function play() {
    hideElementById('home-screen');
    hideElementById('score')
    showElementById('playground');
    setTextElementValueById('score-count', 0)
    setTextElementValueById('life-count', 5)
    continueGame();

}

function handleKeyboardButtonPress(event) {
    const playerPressedAlphabet = event.key;
    const playerPressed = playerPressedAlphabet.toUpperCase();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;

    if (playerPressed === currentAlphabet) {
        const scoresGain = document.getElementById('score-count');
        const scoresGainText = scoresGain.innerText;
        const currentScore = parseInt(scoresGainText);
        const newScore = currentScore + 1;
        scoresGain.innerText = newScore;
        removeBackgroundColorById(currentAlphabet)
        // console.log(currentScore);
        continueGame()
    }
    else {
        const lifeLost = document.getElementById('life-count');
        const lifeLostText = lifeLost.innerText;
        const currentLife = parseInt(lifeLostText);
        const updatedLife = currentLife - 1;
        lifeLost.innerText = updatedLife;
        removeBackgroundColorById(currentAlphabet)
        // scoreCount()
        continueGame()
        if (updatedLife === 0) {
            gameOver()
        }
    }
    
}
document.addEventListener('keyup', handleKeyboardButtonPress);


function continueGame() {
    const alphabet = getArandomAlphabet();

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBackgroundColorById(alphabet);
}





function gameOver() {
    hideElementById('playground')
    showElementById('score')

    const finalScore = getTextElementValueById('score-count');
    setTextElementValueById('final-score', finalScore);

    const lastcurrentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(lastcurrentAlphabet)
}



 
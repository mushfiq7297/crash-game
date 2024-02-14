function play(){
    hideElementById('home-screen');
    showElementById('playground');
   continueGame();
}

function continueGame(){
    const alphabet = getArandomAlphabet();

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBackgroundColorById(alphabet);
}
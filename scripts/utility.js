function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function getArandomAlphabet(){
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ/';
    const alphabet = alphabets.split('');
    
    const index = Math.round(Math.random()*26);
    const randomAlphabet = alphabet[index];
    return randomAlphabet;
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-500');
}
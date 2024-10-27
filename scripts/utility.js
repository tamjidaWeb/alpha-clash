function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function enterGameElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function setHighlightColorById ( elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeHighlightColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}









// function getARandomAlphabet(){
//     //get od create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);

//     //get a random index between 0-25
//     const randomNumber = Math.random()*25;
//     const index = Math.round(randomNumber);
   

//     const alphabet = alphabets[index];
//     console.log(index, alphabet);
//     return alphabet;

// }
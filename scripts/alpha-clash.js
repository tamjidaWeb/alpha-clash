// function play(){
//    // step 1: hide the home screen to hide the screen add the class hidden to the home section
   
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');


// // step 2: show the playground
// const playGround = document.getElementById('play-ground');
// playGround.classList.remove('hidden');
// }
function handleKeyboardButtonPress(event){
    console.log(event.key);
//     const playerPressed = event.key;
//     console.log('player pressed',playerPressed);

//     //get the expected to press
//     const currentAlphabetElement = document.getElementById('current-alphabet')
//     console.log(currentAlphabetElement);
}



//captured keyboard key press
document.addEventListener('keyup',handleKeyboardButtonPress);





function continueGame(){
    // step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet',alphabet )

    //set randomly generately alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setHighlightColorById(alphabet);


}



function play(){
    hideElementById('home-screen');
    enterGameElementById('play-ground');
    continueGame('')
}
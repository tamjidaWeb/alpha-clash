// function play(){
//    // step 1: hide the home screen to hide the screen add the class hidden to the home section
   
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');


// // step 2: show the playground
// const playGround = document.getElementById('play-ground');
// playGround.classList.remove('hidden');
// }
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet =currentAlphabet.toLocaleLowerCase();


    if( expectedAlphabet === playerPressed){
        console.log('you got a point');
        console.log('you have pressed correctly ', expectedAlphabet);
        //update score:
        //1. get the curreny scoore
        //2. increase the score by 1
        //3. show the updated score

        //start a new round

        
        
        
        removeHighlightColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('lose a point');
    }

}
    
//captured keyboard key press
document.addEventListener('keyup',handleKeyboardButtonPress);


function continueGame(){
    // step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet',alphabet )

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
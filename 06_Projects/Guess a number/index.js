const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessText = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;
const randomNumber = parseInt(Math.random()*100 + 1);

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please Enter a valid number");
  }
  else if(guess <1){
    alert("Please Enter number more than 1");
  }
  else if(guess >100){
    alert("Please Enter number less than 100");
  }
  else{
    prevGuess.push(guess);
    if(numGuess === 10){
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage("You guessed it right!");
    endGame();
  }
  else if(guess < randomNumber){
    displayMessage("Number is TOO low!");
  }
  else{
    displayMessage("Number is TOO high!");
  }
}

function displayGuess(guess){
  userInput.value = "";
  guessText.innerHTML += ` ${guess}`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.val ="";
  userInput.setAttribute('disabled','');
  p.classList.add('button')
  p.innerHTML=`<h2 id ="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener('click',function(e){
    location.reload();
  })
}
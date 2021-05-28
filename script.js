'use strict';

const results=document.getElementById('result');
let [compScore,userScore] = [0,0];

//when user clicks
//generate a random choice of the computer languages
//display choices
//it should compare the computer choice with the user choice
//it should show a messege about
//it should update the score


let gameRules = {
  Rock: {
    Rock : 'Draw',
    Paper : 'Lose',
    Scissors : 'Win',
  },
  Paper: {
    Rock : 'Win',
    Paper : 'Draw',
    Scissors : 'Lose',
  },
  Scissors: {
    Rock : 'Lose',
    Paper : 'Win',
    Scissors : 'Draw',
  },
};

function clicked(input){
  // console.log(`i am ${input}`);
  let chioces=['Rock','Paper','Scissors'];
  let randomNumber=Math.trunc(Math.random()*3);
  let compChoice=chioces[randomNumber];
  // console.log(input === chioces[randomNumber]);
  document.getElementById('comp-choice').innerHTML = `Computer choose <span>${compChoice.toUpperCase()}</span>`;
  document.getElementById('u-choice').innerHTML = `You choose <span>${input.toUpperCase()}</span>`;

switch(gameRules[input][compChoice]){
  case 'Win':
    results.innerHTML = 'You win';
    userScore++;
    break;
  case 'Lose':
    results.innerHTML = 'You lose';
    compScore++;
    break;
  case 'Draw':
    results.innerHTML = 'You draw';
    break;
}
document.getElementById('comp-score').innerHTML = compScore;
document.getElementById('user-score').innerHTML = userScore;
}
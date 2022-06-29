function computerPlay(){
    let number = Math.floor(Math.random() *4);
    
    if(number == 1){
       return "rock";
    }else if(number == 2){
       return "paper";
    }else if(number == 3){
       return "scissor";
    }
    return 'scissor';
}
function oneRound(playerSel, computerSel){
  // 3 cases:
   let result = "";
  //Draw cases
   if((playerSel == 'rock' && computerSel == 'rock') || (playerSel == 'paper' && computerSel == 'paper')
  ||(playerSel == 'scissor' && computerSel == 'scissor')){
      result = 'draw';
  }
   else if((playerSel == 'rock' && computerSel == 'scissor') || (playerSel == 'paper' && computerSel == 'rock')
  ||(playerSel == 'scissor' && computerSel == 'paper')){
      result = 'win';
  }
   else if((playerSel == 'scissor' && computerSel == 'rock') || (playerSel == 'rock' && computerSel == 'paper')
  ||(playerSel == 'paper' && computerSel == 'scissor')){
      result = 'lose';
  }

  return result;
}


let result = '';
let playerScore = 0;
let computerScore = 0;
let computerSelection = '';
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
const story = document.querySelector('h4');
const btn = document.querySelectorAll('button');

btn.forEach((button) => {

   button.addEventListener('click', () => {
      let userChoose = button.id;
      let computerChoose = computerPlay();
      result = oneRound(button.id, computerChoose);
      if(playerScore == 5){
         alert("Congratulation, you won! Refresh to play again!");
         window.location.reload();
      }
      if(computerScore == 5){
         alert("Better luck next time! Refresh to play again!");
         window.location.reload();
      }
      if(result == 'win'){
         playerScore++;
         pScore.innerHTML = playerScore;
         story.innerHTML = `Good job! ${userChoose} beats ${computerChoose}, Pick again!`;
      }
      else if(result == 'lose'){
         computerScore++;
         cScore.innerHTML = computerScore;
         story.innerHTML = `Sorry! ${computerChoose} beats ${userChoose}, Try again!`;
      } else {
         story.innerHTML = `It's a draw! ${computerChoose} and ${userChoose}, Try again!`;
      }
    
      

   });
});



//Test function
  
 
   
  














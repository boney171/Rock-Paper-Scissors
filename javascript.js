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
   let playerSelection = playerSel.toLowerCase();
   let computerSelection = computerSel.toLowerCase();
   if(playerSelection == 'rock' && computerSelection == 'rock'){
      return "Rock and Rock, It's a draw!";
   }
   else if(playerSelection == 'paper' && computerSelection == 'paper'){
      return "Paper and Paper, It's a draw!";
   }
   else if(playerSelection == 'scissor' && computerSelection == 'scissor'){
      return "Scissor and Scissor, It's a draw!";
   }
   else if(playerSelection == 'rock' && computerSelection == 'paper'){
      return "You Lose! Paper beats Rock!";
   }
   else if(playerSelection == 'rock' && computerSelection == 'scissor'){
      return "You Win! Rock beats scissor!";
   }
   else if(playerSelection == 'paper' && computerSelection == 'rock'){
      return "You Win! Paper beats Rock!";
   }
   else if(playerSelection == 'paper' && computerSelection == 'scissor'){
      return "You Lose! Scissor beats paper!";
   }
   else if(playerSelection == 'scissor' && computerSelection == 'rock'){
      return "You Lose! Rock beats Scissor!";
   }
   else if(playerSelection == 'scissor' && computerSelection == 'paper'){
      return "You Win! Scissor beats Paper!";
   }
}

for(let i = 0; i < 5; i++){
   let input = prompt("Enter a selection");
   let computerSelection = computerPlay();
   document.write(oneRound(input,computerSelection));
}

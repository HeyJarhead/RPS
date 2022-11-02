 // create welcome Message
 console.log("Hello, welcome to my Rock, Paper, Scissors game! \nStart by entering your choice of either Rock, Paper or Scissors.")
 var roundCounter = 1;
 var userWins = 0;
 var computerWins = 0;

const buttons = document.querySelectorAll('button');

/// Event Listeners 
buttons.forEach((button) => {
    var playerChoice;
    var computerChoice;
    // button.addEventListener('click', ()=> {
    //     if (button.id === 'rock'){
    //         playerChoice = 'rock';
    //         getPlayerInput(playerChoice);
    //         var computerReuslt = getComputerResult();
    //         playRound(playerChoice, computerReuslt);
    //     }
    // })
    button.addEventListener('click', ()=>{
        playerChoice = getPlayerInput(button.id);
        computerChoice = getComputerResult();
        playRound(playerChoice,computerChoice);
    })
})

 ////////// Main Game Call /////////////////////
 // Establish Global variables

 //game();

 // get the Random Computer choice
 function getComputerResult() {
     var answer;
     let randomChoice = Math.floor(Math.random()* 10 + 1);
     if (randomChoice <= 3){
         answer = "Rock";
         return answer;
     } else if(randomChoice > 3 && randomChoice <= 6){
         answer = "Paper";
         return answer;
     } else if (randomChoice > 6){
         answer = "Scissors";
         return answer;
     }
 }
 // get user input  
 function getPlayerInput(playerChoice){
     if (playerChoice === "rock"){
     playerChoice = "Rock";
     return playerChoice;
     } else if (playerChoice === "paper"){
     playerChoice = "Paper"
     return playerChoice;
     } else if (playerChoice === "scissors"){
     playerChoice = "Scissors";
     return playerChoice;
     } else return null;
 }
 // compare choices 
 function playRound(playerSelection, computerSelection){
     // if statements
     if (playerSelection === "Paper" && computerSelection === "Rock"){
         console.log("Computer chose Rock\nYou Win! Paper beats Rock!")
         userBoard();
     } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
         console.log("Computer chose Scissors\nYou Win! Rock beats Scissors!")
         userBoard();
     } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
         console.log("Computer chose Paper\nYou Win! Scissors beat Paper!")
         userBoard();
     }  else if (playerSelection === "Rock" && computerSelection === "Paper"){
         console.log("Computer chose Paper\nYou Lose! Paper beats Rock!")
         computerBoard();
     }  else if (playerSelection === "Scissors" && computerSelection === "Rock"){
         console.log("Computer chose Rock\nYou Lose! Rock beat Scissors!")
         computerBoard();
     } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
         console.log("Computer chose Scissors\nYou Lose! Scissors beat paper!")
         computerBoard();
     } else if (playerSelection === computerSelection){
         console.log("You both chose the same thing, Tie!")
     } else if (playerSelection === null){
         console.log("Your choice is not valid, Computer Wins!")
         computerBoard();
     }
     // User beats rock 
     // user beats scissors
     // user beats papper
     // computer beats rock 
     // computer beats scissors
     // computer beats paper 
     // error
 }
 //// Main game funtion
function game(){
 // create a for loop to create a 5 round game 
 
console.log("Round "+ roundCounter + ":")
var promptInput = prompt("Chose: Rock, Paper, Scissors\nEnter here:").toLowerCase();
userInput = getPlayerInput(promptInput);
console.log("You chose: " + userInput)
var computerInput = getComputerResult();
playRound(userInput,computerInput);
 roundCounter++;
 
 if (userWins > computerWins){
     console.log("You Have WON The Game! Final Result:\nUser: "+ userWins + " Computer: " + computerWins)
 } else if (userWins < computerWins){
     console.log("You Have LOST The Game! Final Result:\nUser: "+ userWins + " Computer: " + computerWins)
 }
 // call userInput
 // call computer intput 
 // call playRound 
 // if computer wins add point to computer
 // if player wins add point to player 
 // after game ends show result of the game
 // if player has more points, the player wins 
 // if the computer has more points, the computer wins

}

/// adds point to computer wins
function computerBoard(){
 computerWins++;
}
// adds point to User
function userBoard(){
 userWins++;
}

 // return the result 
 // after 5 games put ending result
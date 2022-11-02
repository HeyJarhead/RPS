 // create welcome Message
 console.log("Hello, welcome to my Rock, Paper, Scissors game! \nStart by entering your choice of either Rock, Paper or Scissors.")
 var roundCounter = 1;
 var userWins = 0;
 var computerWins = 0;

const buttons = document.querySelectorAll('button');
const result = document.createElement('div');
result.classList.add('result');
const score = document.createElement('div');
score.classList.add('score');


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
    if (userWins === 5){
        score.textContent = "The User has won the game\n Final Score\n User: " + userWins + "\n Computer: " + computerWins;
        btnContainer.appendChild(score);
        result.textContent = "";
        btnContainer.appendChild(result); 
    } else if (computerWins === 5){
        score.textContent = "The Computer has won the game\n Final Score\n User: " + userWins + "\n Computer: " + computerWins;
        btnContainer.appendChild(score);
        result.textContent = "";
        btnContainer.appendChild(result); 
    } else
     // if statements
     if (playerSelection === "Paper" && computerSelection === "Rock"){
        userBoard();
        score.textContent = "Current Score\n User: " + userWins + "\n Computer: " + computerWins;
        btnContainer.appendChild(score);
         result.textContent = "Computer chose Rock\nYou Win! Paper beats Rock!";
         btnContainer.appendChild(result);
     } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        userBoard();
        score.textContent = "Current Score\n User: " + userWins + "\n Computer: " + computerWins;
        btnContainer.appendChild(score);
        result.textContent = "Computer chose Scissors\nYou Win! Rock beats Scissors!";
        btnContainer.appendChild(result);
     } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        userBoard();
        score.textContent = "Current Score\n User: " + userWins + "\n Computer: " + computerWins;
        btnContainer.appendChild(score);
        result.textContent = "Computer chose Paper\nYou Win! Scissors beat Paper!";
        btnContainer.appendChild(result);
     }  else if (playerSelection === "Rock" && computerSelection === "Paper"){
        computerBoard();
        score.textContent = "Current Score\n User: " + userWins + "\n Computer: " + computerWins;
        btnContainer.appendChild(score);
        result.textContent = "Computer chose Paper\nYou Lose! Paper beats Rock!";
        btnContainer.appendChild(result);
     }  else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        computerBoard();
        score.textContent = "Current Score\n User: " + userWins + "\n Computer: " + computerWins;
        btnContainer.appendChild(score);
        result.textContent = "Computer chose Rock\nYou Lose! Rock beat Scissors!";
        btnContainer.appendChild(result);
     } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        computerBoard();
        score.textContent = "Current Score\n User: " + userWins + "\n Computer: " + computerWins;
        btnContainer.appendChild(score);
        result.textContent = "Computer chose Scissors\nYou Lose! Scissors beat paper!";
        btnContainer.appendChild(result);
     } else if (playerSelection === computerSelection){
        score.textContent = "Current Score\n User: " + userWins + "\n Computer: " + computerWins;
        btnContainer.appendChild(score);
        result.textContent =" You both chose the same thing, Tie!";
        btnContainer.appendChild(result);
     } else if (playerSelection === null){
        result.textContent = "Your choice is not valid, Computer Wins!";
        btnContainer.appendChild(result);
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
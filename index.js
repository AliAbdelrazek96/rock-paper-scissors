let myArray = ["rock","paper", "scissors"]
let playerChoice 
let computerChoice 
let playerScore = 0;
let computerScore = 0;

//grab the buttons 
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

//grab score divs
const scoreOfPlayer = document.getElementById("playerScore");
const scoreOfComputer = document.getElementById("computerScore");
const scoreMessage = document.getElementById("scoreMessage");


rock.addEventListener("click", function() {
    playerChoice = "rock"
    console.log(playerChoice)
    pickForComputer()
} )
paper.addEventListener("click", function() {
    playerChoice = "paper"
    console.log(playerChoice)
    pickForComputer()
} )
scissors.addEventListener("click", function() {
    playerChoice = "scissors"
    console.log(playerChoice)
    pickForComputer()
} )


//pick rock or paper or scissors fr computer
function pickForComputer() {
    let i = Math.floor(Math.random() * 3)
    computerChoice = myArray[i]
    console.log(computerChoice)
    decideWinner();
   
}

//compare, add and display score, display winner, check if anyone reached 5 

function decideWinner() {
  if (playerChoice === computerChoice) {
         console.log("tie!")
         scoreMessage.textContent = "It's a tie!"
  } else if (playerChoice === "rock" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "scissors" || 
  playerChoice === "scissors" && computerChoice === "paper" || computerChoice === "rock" && playerChoice === "scissors") {
        console.log("player wins!")
        playerScore++
        scoreMessage.textContent = "Player wins!"
  }   else  {
        computerScore++
    console.log("computer wins!")
    scoreMessage.textContent = "Computer wins!"
  } 
  scoreOfPlayer.textContent = `Player: ${playerScore}`
  scoreOfComputer.textContent = `Computer: ${computerScore}`
  if (playerScore === 5) {
    scoreMessage.textContent = "Player wins it all!"

  } else if (computerScore === 5) {
    scoreMessage.textContent = "Computer wins it all!"
  }

}





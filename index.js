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
console.log(scoreOfComputer)


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
    pickForComputer = myArray[i]
    console.log(computerChoice)
    decideWinner();
   
}

//compare and decide winner and add to score

function decideWinner() {
  if (playerChoice === computerChoice) {
         console.log("tie!")
  } else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("player wins!")
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("player wins!")
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("player wins!")
  }  else if (computerChoice === "rock" && playerChoice === "scissors") {
        console.log("player wins!")
  }  else if (computerChoice === "paper" && playerChoice === "rock") {
    console.log("computer wins!")
  }  else  {
    console.log("computer wins!")
  } 

}





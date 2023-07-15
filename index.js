let myArray = ["rock","paper", "scissors"]
let playerChoice 
let finalChoice 

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
rock.addEventListener("click", function() {
    playerChoice = "rock"
    console.log(playerChoice)
    computerChoice()
} )
paper.addEventListener("click", function() {
    playerChoice = "paper"
    console.log(playerChoice)
    computerChoice()
} )
scissors.addEventListener("click", function() {
    playerChoice = "scissors"
    console.log(playerChoice)
    computerChoice()
} )



function computerChoice() {
    let i = Math.floor(Math.random() * 3)
    finalChoice = myArray[i]
    console.log(finalChoice)
    decideWinner();
   
}

function decideWinner() {
  if (playerChoice === finalChoice) {
         console.log("tie!")
  } else if (playerChoice === "rock" && finalChoice === "paper") {
        console.log("player wins!")
  } else if (playerChoice === "paper" && finalChoice === "scissors") {
        console.log("player wins!")
  } else if (playerChoice === "scissors" && finalChoice === "paper") {
        console.log("player wins!")
  }  else if (finalChoice === "rock" && playerChoice === "scissors") {
        console.log("player wins!")
  }  else if (finalChoice === "paper" && playerChoice === "rock") {
    console.log("computer wins!")
  }  else  {
    console.log("computer wins!")
  } 

}





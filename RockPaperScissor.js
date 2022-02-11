function computerPlay(){
    const RandomNumber = Math.floor(Math.random() * 2); 
    let compSelection = ""
    if(RandomNumber % 2 ==0){
        compSelection = "Rock"
    }
    
    else if(RandomNumber % 2 == 1){
        compSelection = "Paper"
    }
    
    else{
        compSelection = "Scissors"
    }

    if (compSelection!="Rock" || compSelection!="Paper" || compSelection!="Scissors") {
        console.log("Invalid Response! You lost a try!")
    }
    
    return compSelection
}

function playRound() {
    let playerSelection = window.prompt("What do you pick? Rock, Paper, or Scissors?")
    let computerSelection = computerPlay()
    if(computerSelection == playerSelection) {
        console.log("That's a draw!")
    }
    
    if(computerSelection == "Rock") {
        if(playerSelection == "Scissors")
            console.log("You lose! Rock beats Scissor")
        if(playerSelection == "Paper")
            console.log("You win! Rock beats Paper")
    }

    else if(computerSelection == "Paper") {
        if(playerSelection == "Scissors")
            console.log("You Win! Scissor beats Paper")
        if(playerSelection == "Rock") 
            console.log("You Lose! Paper beats Rock")
    }

    else if(computerSelection == "Scissors") {
        if(playerSelection == "Paper")
            console.log("You Lose! Scissor beast Paper")
        if(playerSelection == "Rock") 
            console.log("You Win! Paper beats Rock")
  }

}

for (let i = 0; i < 5; i++) {
    playRound()
}
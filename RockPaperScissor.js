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

    
    return compSelection
}

function playRound() {
    let playerSelection = this.id;
    console.log(this.id)
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

    else {
        console.log("Invalid Response! You lost a try!")
    }

}



// Create three buttons, one for each selection. Add an event listener to
// the buttons that call your playRound function with the correct
// playerSelection every time a button is clicked. (you can keep the console.logs for this step)
document.getElementById('Rock').onclick = playRound;
document.getElementById('Paper').onclick = playRound;
document.getElementById('Scissors').onclick = playRound;
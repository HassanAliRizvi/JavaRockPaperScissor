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


function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let computerPoints = 0;
    let playerPoints = 0;

    if(playerSelection == "Rock" && computerSelection=="Scissors" ||
        playerSelection == "Paper" && computerSelection=="Rock" ||
        playerSelection == "Scissors" && computerSelection=="Paper") {

            playerPoints = playerPoints + 1; //PLAYER POINTS INCREMENT

            results.innerHTML = playerSelection + " beats " + computerSelection + "<br>Player Score: " + playerPoints +"</br>"+ "<br>Computer  Score: " + computerPoints;
            if(playerPoints == 5){
                results.textContent = "You Win!"
            }
        }
    
    else if (computerSelection == playerSelection){
        results.innerHTML = "That's a draw!" + "<br>Player Score: " + playerPoints +"</br>"+ "<br>Computer  Score: " + computerPoints;
    }
    
    else{

        computerPoints = computerPoints + 1;//COMPUTER POINTS INCREMENT

        results.innerHTML = computerSelection + " beats " + playerSelection + 
        "<br>Player Score: " + playerPoints +"</br>"+ "<br>Computer  Score: " + computerPoints;
        if(computerPoints == 5)
            results.textContent = "You Lose! However, Computer Wins!"

    }


}




// Create three buttons, one for each selection. Add an event listener to
// the buttons that call your playRound function with the correct
// playerSelection every time a button is clicked. (you can keep the console.logs for this step)
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      playRound(button.id);
    });
  });



//Add a div for displaying results and change all of your console.logs into DOM methods.
//Display the running score, and announce a winner of the game once one player reaches 5 points.
const results = document.querySelector('.results');


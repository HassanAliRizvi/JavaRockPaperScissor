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


// Create three buttons, one for each selection. Add an event listener to
// the buttons that call your playRound function with the correct
// playerSelection every time a button is clicked. (you can keep the console.logs for this step)
const buttons = document.querySelectorAll('button');

let computerPoints = 0;
let playerPoints = 0;

function playRound(playerSelection) {
    let computerSelection = computerPlay()


    if(playerSelection == "Rock" && computerSelection=="Scissors" ||
        playerSelection == "Paper" && computerSelection=="Rock" ||
        playerSelection == "Scissors" && computerSelection=="Paper") {

            playerPoints = playerPoints + 1; //PLAYER POINTS INCREMENT

            results.innerHTML = "You Win!" + playerSelection + " beats " + computerSelection + "<br>Player Score: " + playerPoints +"</br>"+ "<br>Computer  Score: " + computerPoints;
            if(playerPoints == 5){
                results.textContent = "You Win!";
                buttons.forEach(button => {button.disabled = true;})
                results.innerHTML = "You Win The Game! " + "<br>Player Score: " + playerPoints +"</br>"+ "<br>Computer  Score: " + computerPoints;
            }
        }
    
    else if (computerSelection == playerSelection){
        results.innerHTML = "That's a draw!" + "<br>Player Score: " + playerPoints +"</br>"+ "<br>Computer  Score: " + computerPoints;
    }
    
    else{

        computerPoints = computerPoints + 1;//COMPUTER POINTS INCREMENT

        results.innerHTML = "You Lose!" + computerSelection + " beats " + playerSelection + 
        "<br>Player Score: " + playerPoints +"</br>"+ "<br>Computer  Score: " + computerPoints;
        if(computerPoints == 5){
            buttons.forEach(button => {button.disabled = true;})
            results.innerHTML = "You Lose! However, Computer Wins The Game! " + "<br>Player Score: " + playerPoints +"</br>"+ "<br>Computer  Score: " + computerPoints;
        }

    }


}


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


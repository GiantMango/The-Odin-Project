console.log("Let's play rock paper scissors!")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter 'rock' 'paper' or 'scissors: ").toLowerCase();
    return choice
}


function playRound(humanChoice, computerChoice) {
    console.log(`YOU -> ${humanChoice} vs COM -> ${computerChoice}`);
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice.length > computerChoice.length || humanChoice.length - computerChoice.length == -4 ) {
        humanScore += 1;
        console.log("You win!");
    } else {
        computerScore += 1;
        console.log("You lose!")
    }
}

function playGame() {
    for (let i = 0; i < 5; i ++) {
        // console.log(`com score: ${computerScore} : you score: ${humanScore}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`FINAL SCORE \nCOM ${computerScore} : YOU ${humanScore}`);
}


playGame();

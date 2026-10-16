function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 );
    if (computerChoice == 0) {
        return "rock";
    }
    else if (computerChoice == 1) {
        return "paper";
    }
    else return "scissors";
}

function getHumanChoice() {
    let humanChoice = window.prompt("Your choice:").toLowerCase();
    return humanChoice;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            return "You lose! Paper beats Rock."
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            return "You win! Rock beats scissors."
        }
        else if (humanChoice == "rock" && computerChoice == "rock") {
            return "It's a tie! Both chose rock"
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            return "You win! Paper beats Rock."
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            return "You lose! Scissors beats paper."
        }
        else if (humanChoice == "paper" && computerChoice == "paper") {
            return "It's a tie! Both chose paper"
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            return "You lose! Rock beats scissors."
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            return "You win! Scissors beats paper."
        }
        else if (humanChoice == "scissors" && computerChoice == "scissors") {
            return "It's a tie! Both chose scissors"
        }
    }

    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(`Final Score -> You: ${humanScore} | Computer: ${computerScore}`);
        if (humanScore > computerScore) {
            console.log("Congratulations! You won the game!");
        } else if (computerScore > humanScore) {
            console.log("Game over! The computer won.");
        } else {
            console.log("It's a tie game!");
        }
}

playGame();



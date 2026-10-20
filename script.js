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


let humanScore = 0;
let computerScore = 0;

const scores = document.querySelector('#scores');

const button = document.querySelector('#buttons');
button.addEventListener('click', e => {

    let humanChoice = e.target.textContent;
    let computerChoice = getComputerChoice();

        if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "rock") {
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "paper") {
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "scissors") {
        }

    //const score = document.createElement("p");
    scores.textContent = `Final Score -> You: ${humanScore} | Computer: ${computerScore}`;
    //scores.appendChild(score);
    
    if (humanScore ==5 || computerScore == 5) {
        const resultP = document.createElement("p");
            if (humanScore > computerScore) {
                resultP.textContent = "Congratulations! You won the game!";
            } else if (computerScore > humanScore) {
                resultP.textContent = "Game over! The computer won.";
            } else {
                resultP.textContent = "It's a tie game!";
            }
            scores.appendChild(resultP);
            humanScore = 0;
            computerScore = 0;
    }
});



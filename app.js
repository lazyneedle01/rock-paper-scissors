const gameItems = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const getRandomItem = (items) => {
    const index = Math.floor(Math.random() * 3);
    return items[index];
};

function getHumanChoice() {
    const userChoice = prompt("What will you pick, bro?", "");
    return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! rock beats scissors")
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! paper beats rock");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! scissors beats paper");
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("Computer Win! rock beats scissors");
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("Computer Win! paper beats rock");
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer Win! scissors beats paper");
        computerScore++;
    } else {
        console.log("Same choice! again");
    }
}

function getWinner(humanScore, computerScore) {
    // in case of 3 rounds with same choices and next rounds with each player winning. 
    if (humanScore === computerScore) {
        console.log("Play a game next time!.");
        return;
    }

    return humanScore > computerScore ? 
        `Winner: Human (${humanScore})points` : 
        `Winner: Computer (${computerScore})points`;
}

function playGame() {
    // for each round, both hamanSelection and computerSelection need to get new value again.
    // after each round, update the score points.
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getRandomItem(gameItems);
        playRound(humanSelection, computerSelection);
    }
    
    // after the game end, annount a winner.
    console.log(getWinner(humanScore, computerScore));

    // clear the game stats after a while
    setTimeout(() => {
        humanScore = 0;
        computerScore = 0;
    }, 5000);
}
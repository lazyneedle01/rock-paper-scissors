// pScore - player score point, cScore - computer score point
let pScore = 0;
let cScore = 0;
const gameItems = ["rock", "paper", "scissors"];
const playerPick = document.querySelector('.player');   
const playerScore = document.querySelector('.player-score #point');
const computerScore = document.querySelector('.computer-score #point');
const winnerText = document.querySelector('.winner');
const gameNoti = document.querySelector('.game-noti');

playerPick.addEventListener('click', (e) => {
    let playerChoice = e.target.classList.value;
    let computerChoice = getRandomItem(gameItems);

    playRound(playerChoice, computerChoice);
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

    getWinner(pScore, cScore);
    cleanAndRestartGame();
});

const getRandomItem = (items) => {
    const index = Math.floor(Math.random() * 3);
    return items[index];
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! rock beats scissors")
        pScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! paper beats rock");
        pScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! scissors beats paper");
        pScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("Computer Win! rock beats scissors");
        cScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("Computer Win! paper beats rock");
        cScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer Win! scissors beats paper");
        cScore++;
    } else {
        console.log("Same choice! again");
    }
}

function getWinner(playerSP, computerSP) {
    if (playerSP === 3) {
        winnerText.textContent = "--- You (player) win the match. ---";
    } else if (computerSP === 3) {
        winnerText.textContent = "--- (computer) win the match. ---";
    }
}

function cleanAndRestartGame() {
    if (pScore === 3 || cScore === 3) {
        gameNoti.textContent = "Game will resume after 5s.";

        setTimeout(() => {
            gameNoti.textContent = "The one who gets 3 points first will win!";
            pScore = 0;
            cScore = 0;
            playerScore.textContent = 0;
            computerScore.textContent = 0;
        }, 5000);
    }
}
let playerScore = 0
let cpuScore = 0
let round = 1

const ROCKBTN = document.querySelector("#rock")
const PAPERBTN = document.querySelector("#paper")
const SCISSORSBTN = document.querySelector("#scissors")

const CHOICETXT = document.querySelector("#choice")
const RESULTTXT = document.querySelector("#result")
const SCORETXT = document.querySelector("#score")

function playGame(PLAYERCHOICE) {
    // Generate computer choice
    const CHOICES = ["rock", "paper", "scissors"];
    const COMPUTERCHOICE = CHOICES[Math.floor(Math.random() * CHOICES.length)];

    // Determine the winner
    let result;
    if (PLAYERCHOICE === COMPUTERCHOICE) {
        result = "tie";
    } else if (
        (PLAYERCHOICE === "rock" && COMPUTERCHOICE === "scissors") ||
        (PLAYERCHOICE === "paper" && COMPUTERCHOICE === "rock") ||
        (PLAYERCHOICE === "scissors" && COMPUTERCHOICE === "paper")
    ) {
        result = "player";
        playerScore++
    } else {
        result = "computer";
        cpuScore++
    }

    // Print the result
    CHOICETXT.textContent = `Player chose ${PLAYERCHOICE}, computer chose ${COMPUTERCHOICE}`;
    RESULTTXT.textContent = `Result: ${result} wins!`;

    // Update scores and round number
    SCORETXT.textContent = `Score: Player ${playerScore}, Computer ${cpuScore} (Round ${round})`;

    if (round === 5) {
        if (playerScore === cpuScore) {
            alert("Stalemate! Both have the same score!")
        } else if (playerScore > cpuScore) {
            alert("Player wins the game!")
        } else {
            alert("Computer wins the game!")
        }
    } else {
        round++
    }
}

// Get player choice
ROCKBTN.addEventListener('click', () => playGame("rock"))
PAPERBTN.addEventListener('click', () => playGame("paper"))
SCISSORSBTN.addEventListener('click', () => playGame("scissors"))
const options = document.querySelectorAll(".options button");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const playAgain = document.querySelector("#playAgain");
const roundResults = document.querySelector("#roundResults");

playAgain.addEventListener("click", () => location.reload());

options.forEach(button => {button.addEventListener("click", getPlayerChoice)});

let playerChoice;
let playerPoints = 0;
let computerPoints = 0;
let computerOptions = ["Rock", "Paper", "Scissors"];

function computerPlay()
{    
    let computerChoice = computerOptions[Math.floor(Math.random()*3)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        computerScore.textContent = ++computerPoints;
        playerScore.textContent = ++playerPoints;
        roundResults.textContent = `"${playerSelection} vs ${computerSelection} is a Tie!`;
    }

    else
    {
       switch (playerSelection)
       {
            case "#rock":
                if (computerSelection === "Paper")
                {
                    computerScore.textContent = ++computerPoints;
                    roundResults.textContent = `"${playerSelection} vs ${computerSelection}, you Lose!`;
                }
                else if (computerSelection === "Scissors")
                {
                    playerScore.textContent = ++playerPoints;
                    roundResults.textContent = `"${playerSelection} vs ${computerSelection}, you Win!`;
                }
               break;

            case "#paper":
                if (computerSelection === "Rock")
                {
                    playerScore.textContent = ++playerPoints;
                    roundResults.textContent = `"${playerSelection} vs ${computerSelection}, you Win!`;
                }
                else if (computerSelection === "Scissors")
                {
                    computerScore.textContent = ++computerPoints;
                    roundResults.textContent = `"${playerSelection} vs ${computerSelection}, you Lose!`;
                }
                break;

            case "#scissors":
                if (computerSelection === "Paper")
                {
                    playerScore.textContent = ++playerPoints;
                    roundResults.textContent = `"${playerSelection} vs ${computerSelection}, you Win!`;
                }
                else if (computerSelection === "Rock")
                {
                    computerScore.textContent = ++computerPoints;
                    roundResults.textContent = `"${playerSelection} vs ${computerSelection}, you Lose!`;
                }
                break;
            default:
                "Error!"
                break;
       }
    }

    checkWinner();
}

const resultOutput =
{
    win: ["You win the game! Well done!", "green"],
    loss: ["You lost the game! Better luck next time.", "red"],
    tie: ["The game is a Tie! You live to win another day.", "yellow"]
}

function checkWinner()
{
    if (playerPoints === 5 || computerPoints === 5)
    {
        switch (playerPoints)
        {
            case playerPoints === computerPoints:
                updateWinner("tie");
                break;
            case playerPoints > computerPoints:
                updateWinner("win");
                break;
            case playerPoints < computerPoints:
                updateWinner("loss");
                break;
            default:
                "Error!"
                break;
        }
    }
}

function updateWinner(winner)
{
    roundResults.textContent = resultOutput[winner][0];
    roundResults.style.color = resultOutput[winner][1];

    optionBtn.forEach(button => {
        button.removeEventListener('click', getPlayerChoice);
      });
}

function getPlayerChoice(e)
{
    let playerSelection = (e.target.id);
    playerChoice = e.target.textContent;
    playRound(playerSelection, computerPlay());
}



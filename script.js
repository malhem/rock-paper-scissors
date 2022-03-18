let userScore = 0;
let computerScore = 0;

let userChoice = prompt("rock, paper or scissors?").toLowerCase();
let computerOptions = ["rock", "paper", "scissors"];
let choiceNumber = Math.floor(Math.random()*3);
let computerChoice = computerOptions[choiceNumber];

function playRound(userChoice, computerChoice)
{
    const currentRound = `${userChoice} vs ${computerChoice}`;

    if(userChoice === computerChoice)
    {
        alert(`${currentRound} is a tie`);
        return;
    }

    if(userChoice === "rock")
    {
        if(computerChoice === "scissors")
        {
            alert(`${currentRound} = you win!`);
            userScore++;
        }
        else if(computerChoice === "paper")
        {
            alert(`${currentRound} = you lose!`);
            computerScore++;
        }
    }
    if(userChoice === "paper")
    {
        if(computerChoice === "scissors")
        {
            alert(`${currentRound} = you lose!`);
            computerScore++;
        }
        else if (computerChoice === "rock")
        {
            alert(`${currentRound} = you win!`);
            userScore++;
        }
    }
    if(userChoice === "scissors")
    {
        if(computerChoice === "rock")
        {
            alert(`${currentRound} = you lose!`)
            computerScore++;
        }
        else if (computerChoice === "paper")
        {
            alert(`${currentRound} = you win!`)
            userScore++;
        }
    }

}

function game()
{
    for(let i = 0; i <= 4; i++)
    {
        playRound(userChoice, computerChoice);
        console.log(userChoice);
        console.log(computerChoice);
        console.log(userScore);
        console.log(computerScore);       
        userChoice = prompt("rock, paper or scissors?").toLowerCase();
    }
    if(computerScore === userScore)
    {
        alert("The game is a tie!")
    }
    else if(computerScore < userScore)
    {
        alert("You won the game!")
    }
    else
    {
        alert("You lost the game!")
    }
}

game();


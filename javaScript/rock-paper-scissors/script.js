let score = JSON.parse(localStorage.getItem('score'));

if(score === null) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}

let isAutoPlaying = false;
let interval;

function startAuto() {
    if(!isAutoPlaying) {
    interval = setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
        }, 100)
        isAutoPlaying = true;
    }else {
        clearInterval(interval);
        isAutoPlaying = false;
    }
}

 function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if(playerMove === 'rock') {
        if(computerMove === 'rock') {
            result = 'Tie';
        }else if(computerMove === 'paper') {
            result = 'You Lose'
        } else if(computerMove === 'scissors') {
            result = 'You Win'
        }
    }else if(playerMove === 'paper') {
        if(computerMove === 'rock') {
            result = 'You Win';
        }else if(computerMove === 'paper') {
            result = 'Tie'
        } else if(computerMove === 'scissors') {
            result = 'You Lose'
        }
    }else if(playerMove === 'scissors') {
        if(computerMove === 'rock') {
            result = 'You Lose';
        }else if(computerMove === 'paper') {
            result = 'You Win'
        } else if(computerMove === 'scissors') {
            result = 'Tie'
        }
    }

    if(result === 'You Win') {
        score.wins++;
    } else if(result === 'You Lose') {
        score.losses++;
    }else if(result === 'Tie') {
        score.ties++;
    }

    localStorage.setItem("score", JSON.stringify(score));

    document.querySelector('.result').innerHTML = result;
    
    document.querySelector('.picks').innerHTML = `
       You picked 
         <img class="pick" src="./images/${playerMove}-emoji.png">
         <img class="pick" src="./images/${computerMove}-emoji.png">
       Computer picked
    `
    updateScore();
}

function updateScore() {
    document.querySelector('.score').innerHTML = `
      WINS: ${score.wins} . LOSSES: ${score.losses} . TIES: ${score.ties}
    `
}

function pickComputerMove() {
   const randomNumber = Math.random();
   let computerMove = '';
   
    if(randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
        } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper'
        }else if(randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors'
    }

    return computerMove;    
}

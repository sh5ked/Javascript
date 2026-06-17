const width = 20;
const height = 20;

const board = document.querySelector('.board');
board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

const snake = [6, 5, 4, 3, 2, 1, 0];
let head = snake[0];
let interval;
let direction = 'right';

const leftBoundaries = []
const rightBoundaries = []

for (let i = 0; i < height; i++) {
    rightBoundaries.push(i * width)
}

for (let i = 1; i < height; i++) {
    leftBoundaries.push(i * width - 1);
}

function createBoard() {
    board.innerHTML = "";
    for (let i = 0; i < width * height; i++) {
        const div = document.createElement("div");
        board.appendChild(div);
    }
    snakeColor();
}

function snakeColor() {
    const divs = board.querySelectorAll('div');
    divs.forEach((div) => div.classList.remove('snake', "head"));
    snake.forEach((num) => {
        if (divs[num]) divs[num].classList.add('snake');
    });
    if (divs[head]) divs[head].classList.add('head');
}

window.addEventListener("keydown", (event) => {
    event.preventDefault();
    switch (event.key) {
        case "ArrowUp":
            move('up');
            break;
        case "ArrowDown":
            move('down');
            break;
        case "ArrowRight":
            move('right');
            break;
        case "ArrowLeft":
            move('left');
            break;
    }
});


function move(dir) {
    const divs = board.querySelectorAll('div');
    if (dir === "up") {
        if (direction === 'down') {
            return;
        }
        head -= width;

        if (!divs[head]) {
            alert('Game Over');
        }

    } else if (dir === "down") {
        if (direction === 'up') {
            return;
        }
        head += width;

        if (!divs[head]) {
            alert('Game Over');
        }
    } else if (dir === "right") {
        if (direction === 'left') {
            return;
        }

        head++;
        if (rightBoundaries.includes(head)) {
            alert('GAME OVER');
        }
    } else if (dir === 'left') {
        if (direction === 'right') {
            return;
        }

        head--;
        if (leftBoundaries.includes(head)) {
            alert('GAME OVER');
        }
    }

    direction = dir;

    snake.unshift(head);
    if (random === head) {
        sound('eat.mp3');
        setRandom();
    } else {
        snake.pop();
    }

    snakeColor();
    startAuto();
}

function startAuto() {
    clearInterval(interval);
    interval = setInterval(() => move(direction), 100);
}

function gameOver() {
    isGameOver = true;
    sound('game-over.mp3');
    alert('🐍 GAME OVER 😧');
    location.reload();
    return;

    // setTimeout...
}

function sound(src) {
    const audio = document.createElement('audio');
    audio.src = src;
    audio.volume = 0.5;
    audio.play();
}
// sound('game-over.mp3');

createBoard();

createBoard();

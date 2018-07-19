let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let snakeX = 50,
    snakeY = 50,
    snakeWidth = 20,
    snakeHeight = 20;

//velocity of the snake move
let dx = 4;

let foodX = Math.floor(Math.random() * (canvas.width - 20)),
    foodY = Math.floor(Math.random() * (canvas.height - 20)),
    foodWidth = 20,
    foodHeight = 20;



function createSnake() {
    requestAnimationFrame(createSnake);
    c.clearRect(0, 0, canvas.width, canvas.height);

    c.fillStyle = 'rgb(60, 60, 60)';
    c.fillRect(snakeX, snakeY, snakeWidth, snakeHeight);


    c.fillStyle = 'rgb(244, 40, 40)';
    c.fillRect(foodX, foodY, foodWidth, foodHeight);

}

function moveSnake(event) {
    if (event.keyCode === 39) {
        snakeX += dx;

        if (snakeX > canvas.width - snakeWidth) {
            snakeX = canvas.width - snakeWidth;
        }
    } else if (event.keyCode === 38) {
        snakeY -= dx;

        if (snakeY < 0) {
            snakeY = 0;
        }
    } else if (event.keyCode === 37) {
        snakeX -= dx;

        if (snakeX < 0) {
            snakeX = 0;
        }
    } else if (event.keyCode === 40) {
        snakeY += dx;

        if (snakeY > canvas.height - snakeHeight) {
            snakeY = canvas.height - snakeWidth;
        }
    }
}



window.addEventListener("keydown", moveSnake);
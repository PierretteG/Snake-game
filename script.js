// coordinates for the position of the snake
let snakeX = 100,
    snakeY = 100;

let snake = document.querySelector('#snake');

// coordinates for the position of the food
let foodX = 0,
    foodY = 0;

let food = document.querySelector('#food');

placeTheSnake();
placeTheFood();

function placeTheSnake() {
    snake.style.left = snakeX + 'px';
    snake.style.top = snakeY + 'px';
}

function placeTheFood() {
    foodX = Math.floor(Math.random() * (window.innerWidth - 20));
    foodY = Math.floor(Math.random() * (window.innerHeight - 20));

    food.style.left = foodX + 'px';
    food.style.right = foodY + 'px';
}
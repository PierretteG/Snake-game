let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let x = Math.floor(Math.random() * (canvas.width - 20));
let y = Math.floor(Math.random() * (canvas.height - 20));

c.fillStyle = 'rgb(60, 60, 60)';
c.fillRect(50, 50, 20, 20);

c.fillStyle = 'rgb(244, 40, 40)';
c.fillRect(x, y, 20, 20);
let scoreInterval;
let player;
let playerSpeed = 2;
let bullet;
let bulletSpeed = 3;

let enemies = [];
let cols = 10;
let rows = 4;
let enemySpeed = 1;

function setup() {
  createCanvas(800, 600);
  player = new Player();
  initEnemies();
  scoreInterval = setInterval(() => {
    player.score++;
  }, 5000);
}

function draw() {
  background(0);

  player.show();
  player.move();

  drawBullet();

  drawEnemy();

  detectCollision();
  gameOver();
  // Mostrar la puntuación en pantalla
  textSize(24);
  fill(255);
  textAlign(LEFT);
  text("Puntuación: " + player.score, 10, 30);
}

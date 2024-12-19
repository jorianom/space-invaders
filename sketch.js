let scoreInterval;
let player;
let playerSpeed = 2;
let bullet;
let bulletSpeed = 3;
let gameOverFlag = false;

let playerImg, bulletImg, enemyImg;

let enemies = [];
let enemyBullet = [];
let cols = 8;
let rows = 3;
let enemySpeed = 0.5;

function setup() {
  createCanvas(800, 600);
  playerImg = loadImage('images/player.png');
  bulletImg = loadImage('images/Ship1.png');
  enemyImg = loadImage('images/enemy.png');
  player = new Player();
  initEnemies();
  scoreInterval = setInterval(() => {
    player.score++;
  }, 5000);
}

function draw() {
  background(0);

  drawBullet();
  player.show();
  player.move();


  drawEnemyBullet();
  drawEnemy();

  detectCollision();
  gameOver();
  // Mostrar la puntuación en pantalla
  textSize(24);
  fill(255);
  textAlign(LEFT);
  text("Puntuación: " + player.score, 10, 30);
}

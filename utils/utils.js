function initEnemies() {
    // Inicializa los enemigos
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            enemies.push(new Enemy(i * 60 + 60, j * 40 + 60));
        }
    }
}

function drawBullet() {
    if (bullet) {
        bullet.show();
        bullet.move();
        if (bullet.offscreen()) {
            bullet = null;
        }
    }
}

function drawEnemy() {
    // Dibuja y mueve los enemigos
    let edge = false;
    for (let enemy of enemies) {
        enemy.show();
        enemy.move();
        if (enemy.x > width - 30 || enemy.x < 30) {
            edge = true;
        }
    }
    if (edge) {
        for (let enemy of enemies) {
            enemy.shiftDown();
        }
    }
}

function detectCollision() {
    // Detectar colisiones entre bala y enemigos
    for (let j = enemies.length - 1; j >= 0; j--) {
        if (bullet?.hits(enemies[j])) {
            enemies.splice(j, 1);
            bullet = null;
            player.setScore(10); // Aumentar puntuación
            break;
        }
    }
}

function gameOver() {
    // Detectar colisiones entre la nave y los enemigos
    for (let i = enemies.length - 1; i >= 0; i--) {
        let d = dist(player.x, height - 40, enemies[i].x, enemies[i].y);
        if (d < 20 + enemies[i].r) { // Radio de la nave + radio del enemigo
            console.log("Colisión detectada!");
            clearInterval(scoreInterval);
            noLoop(); // Detiene el juego
            textSize(32);
            fill(255, 0, 0);
            textAlign(CENTER);
            text("¡Game Over!", width / 2, height / 2);
        }
    }
}


function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        player.setDir(-1);
    } else if (keyCode === RIGHT_ARROW) {
        player.setDir(1);
    } else if (key === ' ') {
        if (!bullet) {
            bullet = new Bullet(player.x, height - 40);
        }
    }
}

function keyReleased() {
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
        player.setDir(0);
    }
}
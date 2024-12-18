class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.bulleActive = false;
    }

    show() {
        fill(255, 0, 0);
        rectMode(CENTER);
        rect(this.x, this.y, 5, 10);
    }

    move() {
        this.y -= bulletSpeed;
    }

    offscreen() {
        return this.y < 0;
    }

    hits(enemy) {
        let d = dist(this.x, this.y, enemy.x, enemy.y);
        return d < 20;
    }
}
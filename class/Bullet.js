class Bullet {
    constructor(x, y, direction = -1) {
        this.x = x;
        this.y = y;
        this.bulleActive = false;
        this.direction = direction;
    }

    show() {
        fill(255, 0, 0);
        rectMode(CENTER);
        rect(this.x, this.y, 5, 10);
        noFill();
        stroke(255, 0, 0);
        ellipse(this.x, this.y, 10); // Radio 40
    }

    move() {
        this.y += bulletSpeed * this.direction;
    }

    offscreen() {
        return this.y < 0 || this.y > height;
    }

    hits(enemy) {
        let d = dist(this.x, this.y, enemy.x, enemy.y);
        return d < 30;
    }
}
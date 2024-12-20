class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 30;
        this.xdir = 1;
    }

    show() {
        // fill(255, 255, 0);
        // ellipse(this.x, this.y, this.r * 2);
        imageMode(CENTER);
        image(enemyImg, this.x, this.y, 60, 60);
        noFill();
        stroke(255, 0, 0);
        ellipse(this.x, this.y, 60); // Radio 30
    }

    move() {
        this.x += this.xdir * enemySpeed;
    }

    shiftDown() {
        this.y += this.r;
        this.xdir *= -1;
    }

    shoot() {
        if (random(100) < 0.05) {
            return new Bullet(this.x, this.y, 1);
        }
    }
}
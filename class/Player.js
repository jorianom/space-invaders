class Player {
    constructor() {
        this.x = width / 2;
        this.dir = 0;
        this.score = 0;
    }

    show() {
        // fill(0, 255, 0);
        // rectMode(CENTER);
        // rect(this.x, height - 40, 40, 20);
        imageMode(CENTER);
        image(playerImg, this.x, height - 60, 80, 60);
    }

    setDir(dir) {
        this.dir = dir;
    }

    setScore(score) {
        this.score += score;
    }

    move() {
        this.x += this.dir * playerSpeed;
        this.x = constrain(this.x, 20, width - 20);
    }
}
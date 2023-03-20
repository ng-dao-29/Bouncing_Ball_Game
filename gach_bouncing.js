class BrickDestroy {
    xBrick;
    yBrick;
    widthBrick;
    heightBrick;
    hp;
    constructor(x, y, w, h, hp) {
        this.xBrick = x;
        this.yBrick = y;
        this.widthBrick = w;
        this.heightBrick = h;
        this.hp = hp;
        this.colorr = ["#FF66CC", "#FF0000", "#FFFF00", "#3366CC"]
    }
    //mau hong 	#FF66CC      xanh duong  #3366CC     vang  	#FFFF00   do  #FF0000
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.colorr[this.hp];
        ctx.fillRect(this.xBrick, this.yBrick, this.widthBrick, this.heightBrick);
        ctx.stroke();
    }
    ball_vs_brick() {
        if (ball.xBall - ball.rBall >= this.xBrick
            && ball.xBall - ball.rBall <= this.xBrick + this.widthBrick
            && ball.yBall - ball.rBall <= this.yBrick + this.heightBrick
        ) {
            console.log("a")
            ball.yMove = -ball.yMove
            this.hp--
            console.log('hp -1')
        }
        // if ( ball.yBall + ball.rBall >= this.yBrick
        //     &&ball.yBall - ball.rBall <= this.yBrick + this.heightBrick) {
        //     ball.xBall = - ball.xBall
        //     console.log("b")
        //     this.hp--
        //     console.log('hp -1')
        // }
    }
    drawBrick() {
        if (this.hp > 0) {
            this.draw(ctx)
            this.ball_vs_brick()
        }
    }
}


// let colorr = ["#3366CC","#FFFF00","#FF66CC"]
// let i = 0
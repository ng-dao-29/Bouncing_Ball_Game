let canvat = document.getElementById('Canvas');
let ctx = canvat.getContext('2d');
// vẽ bóng
let ball = new Ball(250, 670, 10, 2, 2);
//vẽ thanh đỡ
let barr = new Bar(200, 690, 110, 15, 5);
let brickk = new BrickDestroy(10, 20, 70, 15, 3);
let brickk2 = new BrickDestroy(110, 20, 70, 15, 3);
let brickk3 = new BrickDestroy(200, 20, 70, 15, 3);
let brickk4 = new BrickDestroy(300, 20, 70, 15, 3);
let brickk5 = new BrickDestroy(400, 20, 70, 16, 3);


let playgame = true;
function handle() {

    if (playgame) {
        ctx.clearRect(0, 0, 500, 700);
        barr.draw(ctx);
        ball.draw(ctx);
        brickk.drawBrick();
        brickk2.drawBrick();
        brickk3.drawBrick();
        brickk4.drawBrick();
        brickk5.drawBrick();
        ball.impact();
        ball.newCoordinates();
        ball.ball_vs_bar();
        barr.moveBar();
        ball.gameOver();
        requestAnimationFrame(handle);
    } else {
        let playgame1 = confirm('game over bạn muốn chơi lại ko ?');
        if (playgame1) {
            play1()
            handle()
        }
    }
}

function play1() {
    ball.xBall = 250;
    ball.yBall = 670;
    barr.xBar = 200;
    barr.yBar = 690
    brickk.hp = 3
    brickk2.hp = 3
    brickk3.hp = 3
    brickk4.hp = 3
    brickk5.hp = 3
    playgame = true;
}
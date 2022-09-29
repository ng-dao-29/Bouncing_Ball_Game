
class Ball {
    xBall
    yBall
    rBall
    xMove
    yMove

    constructor(x, y, r, xm, ym) {
        this.xBall = x;
        this.yBall = y;
        this.rBall = r;
        this.xMove = xm;
        this.yMove = ym;
    }

    //vẽ bóng
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.xBall, this.yBall, this.rBall, 0, 2 * Math.PI);
        ctx.fillStyle = '#EE7621'
        ctx.fill()
        ctx.stroke()
    }

    // thay đổi tọa độ, bóng di chuyển
    newCoordinates() {
        this.xBall += this.xMove;
        this.yBall += this.yMove;
    }

    //thay đổi hướng khi va chạm
    impact() {
        if (this.xBall < this.rBall || this.xBall >= 500 - this.rBall) {
            this.xMove = -this.xMove
            console.log(1)
        } else if (this.yBall < this.rBall) {
            this.yMove = -this.yMove
            console.log(2)
        }
    }

    //va cham thanh bar
    ball_vs_bar() {
        if (
            this.xBall + this.rBall >= barr.xBar
            && this.xBall + this.rBall <= barr.xBar + barr.widthBar
            && this.yBall + this.rBall >= barr.yBar) {
            this.yMove = -this.yMove;
        }
    }

    gameOver() {
        if (this.yBall >= 700 - this.rBall) {
            playgame = false

        }
    }
}




// thuật toán va chạm giữa hình tròn và chữ nhật (đăng nghiên cứu)

// Phương pháp: Gọi C là tâm và R là bán kính hình tròn. Ta sẽ tìm cách xác định điểm A là điểm gần nhất thuộc hình chữ nhật đến tâm C. Sau đó so sánh độ lớn của CA với R.
//
//     Khoảng cách giữa tâm C hình tròn và điểm A của hình chữ nhật được minh họa như hình dưới đây. Khi tâm hình tròn nằm bên trong hình chữ nhật, thì điểm C và A sẽ trùng nhau.
//
//
//     Closed point between rectangle and circleGọi rect là hình chữ nhật cần xác định va chạm. Ta có thuật toán để xác định điểm A như sau:
//
//
//     – B1: Gán A bằng với C.
//
// – B2: Nếu C.X < rect.Left, đặt A.X = rect.Left. Ngược lại nếu C.X > rect.Right, đặt A.X = rect.Right.
//
// – B3: Nếu C.Y < rect.Top, đặt A.Y = rect.Top. Ngược lại nếu C.Y > rect.Bottom, đặt A.Y = rect.Bottom.
//
//
//     Khi đã có điểm A, ta lại dùng công thức Pythagoras để so sánh với bán kính của hình tròn.



// Circle.prototype.collideWithRect = function(rect){
//     var px = this.cx;
//     var py = this.cy;
//
//     if(px < rect.left)
//         px = rect.left;
//     else if(px > rect.right)
//         px = rect.right;
//
//     if(py < rect.top)
//         py = rect.top;
//     else if(py > rect.bottom)
//         py = rect.bottom;
//
//     var dx = this.cx - px;
//     var dy = this.cy - py;
//
//     return (dx*dx + dy*dy) <= this.radius*this.radius;
// }




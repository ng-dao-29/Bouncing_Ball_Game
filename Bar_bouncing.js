class Bar {
    yBar
    xBar
    widthBar
    heightBar
    go
    constructor(x,y,w,h,g) {
        this.xBar = x;
        this.yBar = y;
        this.widthBar = w;
        this.heightBar = h;
        this.go = g;

        this.ev = new Controlls();
    }


        //vẽ thanh đỡ Bar
    draw (ctx) {
        ctx.beginPath();
        ctx.fillStyle="#4CAF50";
        ctx.fillRect(this.xBar,this.yBar,this.widthBar,this.heightBar);
        ctx.stroke();
    }
    //    di chuyen thanh do
    moveBar() {
        if(this.ev.goleft) {
            this.xBar -= this.go;
        }else if (this.ev.goright) {
            this.xBar += this.go
        }
        if (this.xBar < 0) {
            this.xBar = 0;
        }
        else if (this.xBar > 400) {
            this.xBar = 400
        }
    }

}

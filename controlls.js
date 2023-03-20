class Controlls {
    goleft
    goright

    constructor() {
        this.goleft = false;
        this.goright = false;
        this.keyboard()
    }

    keyboard() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.goleft = true;
                    break;
                case "ArrowRight":
                    this.goright = true;
                    break;
            }

            document.onkeyup = (event) => {
                switch (event.key) {
                    case "ArrowLeft":
                        this.goleft = false;
                        break;
                    case "ArrowRight":
                        this.goright = false;
                        break;
                }
            }
        }
    }
}
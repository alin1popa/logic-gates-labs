class Display16 extends Component {
    constructor(context, x, y, defaultval) {
        super(context, x, y, 60, 100, 4, 0, 0, 0);
        this.values = [0, 0, 0, 0, 0, 0, 0];
    }

    drawVerticalBar(x, y, val) {
        var ctx = this.context;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x-5, y+5);
        ctx.lineTo(x-5, y+35);
        ctx.lineTo(x, y+40);
        ctx.lineTo(x+5, y+35);
        ctx.lineTo(x+5, y+5);
        ctx.lineTo(x, y);
        ctx.fillStyle = val ? "red" : "lightgray";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    drawHorizontalBar(x, y, val) {
        var ctx = this.context;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+5, y-5);
        ctx.lineTo(x+35, y-5);
        ctx.lineTo(x+40, y);
        ctx.lineTo(x+35, y+5);
        ctx.lineTo(x+5, y+5);
        ctx.lineTo(x, y);
        ctx.fillStyle = val ? "red" : "lightgray";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    drawIntern() {
        var x = this.x;
        var y = this.y;

        this.drawHorizontalBar(x+10, y+10, this.values[0]);
        this.drawVerticalBar(x+50, y+10, this.values[1]);
        this.drawVerticalBar(x+50, y+50, this.values[2]);
        this.drawHorizontalBar(x+10, y+90, this.values[3]);
        this.drawVerticalBar(x+10, y+50, this.values[4]);
        this.drawVerticalBar(x+10, y+10, this.values[5]);
        this.drawHorizontalBar(x+10, y+50, this.values[6]);
    }
    
    apply() {
        var val = 1*this.terminals[0].value+2*this.terminals[1].value+4*this.terminals[2].value+8*this.terminals[3].value;
        
        switch (val) {
            case 0: this.values = [1, 1, 1, 1, 1, 1, 0]; break;
            case 1: this.values = [0, 1, 1, 0, 0, 0, 0]; break;
            case 2: this.values = [1, 1, 0, 1, 1, 0, 1]; break;
            case 3: this.values = [1, 1, 1, 1, 0, 0, 1]; break;
            case 4: this.values = [0, 1, 1, 0, 0, 1, 1]; break;
            case 5: this.values = [1, 0, 1, 1, 0, 1, 1]; break;
            case 6: this.values = [1, 0, 1, 1, 1, 1, 1]; break;
            case 7: this.values = [1, 1, 1, 0, 0, 0, 0]; break;
            case 8: this.values = [1, 1, 1, 1, 1, 1, 1]; break;
            case 9: this.values = [1, 1, 1, 1, 0, 1, 1]; break;
            case 10: this.values = [1, 1, 1, 0, 1, 1, 1]; break;
            case 11: this.values = [0, 0, 1, 1, 1, 1, 1]; break;
            case 12: this.values = [1, 0, 0, 1, 1, 1, 0]; break;
            case 13: this.values = [0, 1, 1, 1, 1, 0, 1]; break;
            case 14: this.values = [1, 0, 0, 1, 1, 1, 1]; break;
            case 15: this.values = [1, 0, 0, 0, 1, 1, 1]; break;
        }
    }
}
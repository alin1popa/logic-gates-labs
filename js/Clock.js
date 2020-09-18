class Clock extends Gate {
    constructor(context, x, y) {
        super(context);
        this.x = x;
        this.y = y;
        
        this.maxtime = 5;
        this.time = 0;

        this.value = false;
        this.terminals = [new Terminal(context, OUTPUT), new Terminal(context, OUTPUT)];
    }

    toggle() {
        this.value = !this.value;
    }
    
    apply() {
        // this.time = (this.time+1)%this.maxtime;
        // if (this.time==0) {
        //     this.value = !this.value;
        // }
        
        this.terminals[0].value = this.value;
        this.terminals[1].value = !this.value;
    }
    
    draw() {
        var x = this.x;
        var y = this.y;
        var ctx = this.context;

        var size = 15;
        var offset = 35;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y-size);
        ctx.lineTo(x+size, y-size);
        ctx.lineTo(x+size, y);
        ctx.lineTo(x+2*size, y);
        ctx.lineTo(x+2*size, y-size);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(x, y+offset-size);
        ctx.lineTo(x, y+offset);
        ctx.lineTo(x+size, y+offset);
        ctx.lineTo(x+size, y+offset-size);
        ctx.lineTo(x+2*size, y+offset-size);
        ctx.lineTo(x+2*size, y+offset);
        ctx.stroke();
        ctx.closePath();
        
        this.terminals[0].x = x+45;
        this.terminals[0].y = y-8;
        this.terminals[1].x = x+45;
        this.terminals[1].y = y+28;
        this.terminals.forEach(t => {
            t.draw();
        });
    }
}

class NandGate3 extends Gate {
    constructor(context, x, y) {
        super(context);
        this.x = x;
        this.y = y;
        
        var t_in_1 = new Terminal(context, INPUT);
        var t_in_2 = new Terminal(context, INPUT);
        var t_in_3 = new Terminal(context, INPUT);
        var t_out_1 = new Terminal(context, OUTPUT);
        
        this.terminals = [t_in_1, t_in_2, t_in_3, t_out_1];
    }
    
    apply() {
        this.terminals[3].value = !(this.terminals[0].value && this.terminals[1].value && this.terminals[2].value);
    }

    draw() {
        var x = this.x;
        var y = this.y;
        var ctx = this.context;
    
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+20, y);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.moveTo(x, y+20);
        ctx.lineTo(x+13, y+20);
        ctx.lineTo(x+13, y+10);
        ctx.lineTo(x+20, y+10);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(x, y-20);
        ctx.lineTo(x+13, y-20);
        ctx.lineTo(x+13, y-10);
        ctx.lineTo(x+20, y-10);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.arc(x+20, y, 20, Math.PI*0.5, Math.PI*1.5, true);
        ctx.moveTo(x+20, y-20);
        ctx.lineTo(x+20, y+20);
        ctx.moveTo(x+50, y);
        ctx.lineTo(x+70, y);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.arc(x+45, y, 5, 0, Math.PI*2, false);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
    
        this.terminals[0].x = x;
        this.terminals[0].y = y-20;
        this.terminals[1].x = x;
        this.terminals[1].y = y+20;
        this.terminals[2].x = x;
        this.terminals[2].y = y;

        this.terminals[3].x = x + 70;
        this.terminals[3].y = y;
        
        this.terminals.forEach(t => {
            t.draw();
        });
    }
}

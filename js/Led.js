class Led extends Gate {
    constructor(context, x, y) {
        super(context);
        this.x = x;
        this.y = y;
        
        this.value = false;
        this.terminals = [new Terminal(context, INPUT)];
    }
    
    apply() {
        this.value = this.terminals[0].value;
    }
    
    draw() {
        var x = this.x;
        var y = this.y;
        var ctx = this.context;
        
        ctx.beginPath();
        ctx.arc(x+20, y, TERMINAL_OUTER_RADIUS, 0, Math.PI*2, false);
        ctx.fillStyle = this.value ? "red" : "lightgray";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        
        this.terminals[0].x = x;
        this.terminals[0].y = y;
        this.terminals.forEach(t => {
            t.draw();
        });
    }
}

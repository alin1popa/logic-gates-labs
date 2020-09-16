class Switch extends Gate {
    constructor(context, x, y) {
        super(context);
        this.x = x;
        this.y = y;
        
        this.value = false;
        this.terminals = [new Terminal(context, OUTPUT)];
    }
    
    apply() {
        this.terminals[0].value = this.value;
    }
    
    extraCollisionCallback(x, y) {
        if (x >= this.x && x <= this.x+30 && y >= this.y && y <= this.y+20) {
            this.value = !this.value;
        }
    }
    
    draw() {
        var x = this.x;
        var y = this.y;
        var ctx = this.context;
    
        ctx.beginPath();
        ctx.rect(x, y, 30, 20);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.rect(x+(this.value ? 15 : 5), y+5, 10, 10);
        ctx.fillStyle = this.value ? "red" : "white";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        
        ctx.fillStyle = "black";
        
        this.terminals[0].x = x+43;
        this.terminals[0].y = y+10;
        this.terminals.forEach(t => {
            t.draw();
        });
    }
}

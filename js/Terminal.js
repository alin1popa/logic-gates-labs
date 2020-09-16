
TERMINAL_OUTER_RADIUS = 8;
TERMINAL_INNER_RADIUS = 4;

INPUT = 1;
OUTPUT = 2;


class Terminal extends Drawable {
    constructor(context, type) {
        super(context);
        this.selected = false;
        this.type = type;
        this.value = false;
        this.connectedWires = [];
    }
    
    propagate(wire) {
        for (var i=0; i<this.connectedWires.length; i++) {
            var w = this.connectedWires[i];
            if (w === wire)
                continue;
            
            if (w.t1 === this)
                w.apply(OUTPUT, undefined);
            else
                w.apply(undefined, OUTPUT);
        }
    }
    
    draw() {
        var ctx = this.context;
        var x = this.x;
        var y = this.y;
        
        ctx.beginPath();
        ctx.arc(x, y, TERMINAL_OUTER_RADIUS, 0, Math.PI*2, false);
        ctx.fillStyle = this.value ? "red" : "lightgray";
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.selected ? "red" : "black";
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.arc(x, y, TERMINAL_INNER_RADIUS, 0, Math.PI*2, false);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.selected ? "red" : "black";
        ctx.stroke();
        ctx.closePath();
        
        ctx.strokeStyle = "black";
    }
    
    checkCollision(x, y) {
        return ((Math.abs(x-this.x) <= TERMINAL_OUTER_RADIUS) && (Math.abs(y-this.y) <= TERMINAL_OUTER_RADIUS));
    }
}
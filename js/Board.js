class Board extends Applicable {
    constructor(context, gates, x, y, w, h) {
        super(context);
        this.gates = gates;
        
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
    
    apply() {
        this.gates.forEach(t => {
            t.apply();
        });
    }
    
    checkCollision(x, y) {
        for (var index = 0; index < this.gates.length; index++) {
            var g = this.gates[index];
            var t = g.checkCollision(x, y);
            if (t) return t;
        }
        return false;
    }
    
    draw() {
        var ctx = this.context;
        
        ctx.fillStyle = "#FFFF33";
        //ctx.rect(this.x, this.y, this.w, this.h);
        var B = 5;
        ctx.rect(this.x+B, this.y+B, this.w-2*B, this.h-2*B);
        ctx.fillRect(this.x, this.y, this.w, this.h);
        //ctx.rect(85, 20, 310, 410);
        //ctx.rect(485, 30, 55, 240);
        //ctx.fillRect(5, 30, 60, 200);
        //ctx.fillRect(85, 20, 310, 410);
        //ctx.fillRect(485, 30, 55, 240);
        ctx.stroke();
        
        this.gates.forEach(t => {
            t.draw();
        });
    }
}
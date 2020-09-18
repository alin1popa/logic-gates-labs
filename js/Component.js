class Component extends Gate {
    constructor(context, x, y, width, height, no_left, no_bottom, no_right, no_top) {
        super(context);
        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;

        this.no_left = no_left;
        this.no_bottom = no_bottom;
        this.no_top = no_top;
        this.no_right = no_right;

        this.terminals = [];
        for (var i=0; i<this.no_left+this.no_bottom+this.no_top; i++) {
            this.terminals.push(new Terminal(context, INPUT));
        }
        for (var i=0; i<this.no_right; i++) {
            this.terminals.push(new Terminal(context, OUTPUT));
        }
    }
    
    apply() {
    }

    draw() {
        var x = this.x;
        var y = this.y;
        var ctx = this.context;
    
        var w = this.width;
        var h = this.height;
        var r = x+w;
        var b = y+h;

        ctx.beginPath();
        ctx.rect(x, y, w, h)
        ctx.stroke();
        ctx.closePath;

        var no_left = this.no_left;
        var no_bottom = this.no_bottom;
        var no_top = this.no_top;
        var no_right = this.no_right;

        var margin=15;

        for (var i=0; i<no_left; i++) {
            ctx.beginPath();
            var end = y+margin+i*(h-2*margin)/((no_left-1)||1)
            ctx.moveTo(x, end);
            ctx.lineTo(x-20, end);
            ctx.stroke();
            ctx.closePath();

            this.terminals[i].x = x-20;
            this.terminals[i].y = end;
        }

        for (var i=0; i<no_bottom; i++) {
            ctx.beginPath();
            var end = x+margin+i*(w-2*margin)/((no_bottom-1)||1)
            ctx.moveTo(end, b);
            ctx.lineTo(end, b+20);
            ctx.stroke();
            ctx.closePath();

            this.terminals[no_left + i].y = b+20;
            this.terminals[no_left + i].x = end;
        }

        for (var i=0; i<no_right; i++) {
            ctx.beginPath();
            var end = y+margin+i*(h-2*margin)/((no_right-1)||1)
            ctx.moveTo(r, end);
            ctx.lineTo(r+20, end);
            ctx.stroke();
            ctx.closePath();

            this.terminals[no_left+no_bottom+i].x = r+20;
            this.terminals[no_left+no_bottom+i].y = end;
        }

        for (var i=0; i<no_top; i++) {
            ctx.beginPath();
            var end = x+margin+i*(w-2*margin)/((no_top-1)||1)
            ctx.moveTo(end, y);
            ctx.lineTo(end, y-20);
            ctx.stroke();
            ctx.closePath();

            this.terminals[no_left+no_bottom+no_right+i].y = y-20;
            this.terminals[no_left+no_bottom+no_right+i].x = end;
        }

        this.terminals.forEach(t => {
            t.draw();
        });
    }
}
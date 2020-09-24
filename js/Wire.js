class Wire extends Applicable {
    constructor(context, t1, t2, color) {
        super(context);
        this.t1 = t1;
        this.t2 = t2;
        this.t1.connectedWires.push(this);
        this.t2.connectedWires.push(this);
        
        if (color == "random") {
            var r = Math.floor(Math.random()*10);
            var colors = [
                "blue", "red", "green", "purple", "olive",
                "darkred", "navy", "teal", "fuchsia", "gray"
            ];
            color = colors[r];
        }
        
        this.color = color;
    }
    
    removeSelf() {
        this.t1.connectedWires = this.t1.connectedWires.filter(w => w !== this);
        this.t2.connectedWires = this.t2.connectedWires.filter(w => w !== this);
    }
    
    apply(propagate_type1, propagate_type2) {
        var type1 = propagate_type1 || this.t1.type;
        var type2 = propagate_type2 || this.t2.type;
    
        if (type1 == OUTPUT && type2 == OUTPUT) {
            // TODO: error
        } else if (type1 == OUTPUT && type2 == INPUT) {
            this.t2.value = this.t1.value;
            this.t2.propagate(this);
        } else if (type1 == INPUT && type2 == OUTPUT) {
            this.t1.value = this.t2.value;
            this.t1.propagate(this);
        } else if (this.t1.value || this.t2.value) {
            //this.t1.value = true;
            //this.t2.value = true;
        }
    }
    
    draw() {
        var ctx = this.context;
        
        ctx.beginPath();
        ctx.moveTo(this.t1.x, this.t1.y);
        ctx.lineTo(this.t2.x, this.t2.y);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
        
        ctx.lineWidth = 1;
        
        ctx.strokeStyle = "black";
    }
}
class Gate extends Applicable {
    constructor(context) {
        super(context);
        this.terminals = [];
        this.output = false;
    }
    
    extraCollisionCallback(x, y) {
        // not implemented
    }
    
    checkCollision(x, y) {
        this.extraCollisionCallback(x, y);
        for (var index = 0; index < this.terminals.length; index++) {
            var t = this.terminals[index];
            if (t.checkCollision(x, y)) {
                return t;
            }
        }
        return false;
    }
}

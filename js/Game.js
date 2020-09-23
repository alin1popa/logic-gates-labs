class Game {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.selectedTerminal = null;
        
        this.boards = [
            new BoardInput(this.context, 10, 10),
            new BoardGates(this.context, 180, 10),
            new BoardLeds(this.context, 1330, 10),
            new BoardMux(this.context, 625, 10),
            new BoardSequential(this.context, 625, 515),
        ];
        this.gates = [
            
        ];
        this.wires = [];
        
        this.canvas.addEventListener('mousedown', this.click.bind(this));
    }
    
    click(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        var t = this.checkCollision(x, y);
        if (t) {
            t.selected = !t.selected;
            
            if (t.selected && !this.selectedTerminal) {
                this.selectedTerminal = t;
            } else if (!t.selected) {
                this.selectedTerminal = null;
            } else {
                var deleted = false;
                for (var index = 0; index < this.wires.length; index++) {
                    var we = this.wires[index];
                    if ((we.t1 == t && we.t2 == this.selectedTerminal) || 
                        (we.t1 == this.selectedTerminal && we.t2 == t)) {
                        we.removeSelf();
                        this.wires.splice(index, 1);
                        deleted = true;
                        break;
                    }
                }
                
                if (!deleted) {
                    var w = new Wire(this.context, t, this.selectedTerminal);
                    this.wires.push(w);
                }
                this.selectedTerminal.selected = false;
                this.selectedTerminal = null;
                t.selected = false;                
            }
        }
        
        this.update();
    }
    
    checkCollision(x, y) {
        for (var index = 0; index < this.boards.length; index++) {
            var g = this.boards[index];
            var t = g.checkCollision(x, y);
            if (t) return t;
        }
        return false;
    }
    
    update() {
        var ctx = this.context;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
       
        for (var i=0; i<10; i++) {
            this.boards.forEach(t => {
                t.apply();
                // t.draw();
            });
            
            this.wires.forEach(t => {
                t.apply();
                // t.draw();
        });
    }

        this.boards.forEach(t => {
            // t.apply();
            t.draw();
        });
        
        this.wires.forEach(t => {
            // t.apply();
            t.draw();
        });
        
    }
}

class Game {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.selectedTerminal = null;

        Terminal.count = 0;
        
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
        this.color = "random";

        this.playing = true;
        
        this.canvas.addEventListener('mousedown', this.click.bind(this));
    
        this.allterminals = this.buildListOfTerminals();
    }

    save() {
        var allinfo = [];
        for (var i=0; i<this.wires.length; i++) {
            var w = this.wires[i];
            var info = {
                "t1": w.t1.id, "t2": w.t2.id, "col": w.color
            };
            allinfo = allinfo.concat(info);
        }

        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([JSON.stringify(allinfo, null, 2)], {
            type: "text/plain"
        }));
        a.setAttribute("download", "save.json");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    resetAllWires() {
        for (var i=0; i<this.allterminals.length; i++) {
            this.allterminals[i].connectedWires = [];
        }

        this.wires = [];
    }

    load(config) {
        this.resetAllWires();

        for (var i=0; i<config.length; i++) {
            var wc = config[i];
            var t1 = this.allterminals.find(e => e.id == wc.t1);
            var t2 = this.allterminals.find(e => e.id == wc.t2);

            var w = new Wire(this.context, t1, t2, wc.col);
            this.wires.push(w);
        }
    }

    buildListOfTerminals() {
        var allterminals = [];
        for (var i=0; i<this.boards.length; i++) {
            for (var j=0; j<this.boards[i].gates.length; j++) {
                allterminals = allterminals.concat(this.boards[i].gates[j].terminals);
            }
        }
        return allterminals;
    }

    togglePlayPause() {
        this.playing = !this.playing;
    }

    setWireColor(color) {
        this.color = color;
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
                    var w = new Wire(this.context, t, this.selectedTerminal, this.color);
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
       
        if (this.playing) {
            for (var i=0; i<10; i++) {
                this.boards.forEach(t => {
                    t.apply();
                });
                
                this.wires.forEach(t => {
                    t.apply();
            });
        }
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

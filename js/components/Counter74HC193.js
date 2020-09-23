class Counter74HC193 extends Component {
    constructor(context, x, y) {
        var labels = ["D0", "D1", "D2", "D3", "CLR", "Load", "Up", "Down", "Q0", "Q1", "Q2", "Q3"];
        super(context, x, y, 120, 120, 4, 4, 4, 0, labels, ["Counter", "74HC193"]);
    
        this.oldup = 0;
        this.olddown = 0;
        this.value = 0;
    }
    
    apply() {
        var d0 = this.terminals[0].value;
        var d1 = this.terminals[1].value;
        var d2 = this.terminals[2].value;
        var d3 = this.terminals[3].value;

        var clr = this.terminals[4].value;
        var load = this.terminals[5].value;
        var up = this.terminals[6].value;
        var down = this.terminals[7].value;

        if (clr == 1) {
            this.value = 0;
        } else if (load == 0 && up == 1 && down == 1) {
            this.value = d0 + d1*2 + d2*4 + d3*8;
        } else if (load == 1) {
            if (down == 1 && up == 1 && this.oldup == 0) {
                this.value++;
            } else if (down == 1 && up ==1 && this.olddown == 0) {
                this.value--;
            }
        }

        this.oldup = up;
        this.olddown = down;

        this.terminals[8].value = this.value % 2;
        this.terminals[9].value = Math.floor(this.value/2) % 2;
        this.terminals[10].value = Math.floor(this.value/4) % 2;
        this.terminals[11].value = Math.floor(this.value/8) % 2;
    }
}
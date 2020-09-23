class Counter74HC190 extends Component {
    constructor(context, x, y) {
        var labels = ["D0", "D1", "D2", "D3", "Load", "U/D", "CE", "CLK", "Q0", "Q1", "Q2", "Q3"];
        super(context, x, y, 120, 120, 4, 4, 4, 0, labels, ["Counter", "74HC190"]);
    
        this.oldclk = 0;
        this.value = 0;
    }
    
    apply() {
        var d0 = this.terminals[0].value;
        var d1 = this.terminals[1].value;
        var d2 = this.terminals[2].value;
        var d3 = this.terminals[3].value;

        var load = this.terminals[4].value;
        var ud = this.terminals[5].value;
        var ce = this.terminals[6].value;
        var clk = this.terminals[7].value;

        if (load == 0) {
            this.value = d0 + d1*2 + d2*4 + d3*8;
        } else if (ce == 1) {
            // do nothing
        } else if (clk == 1 && this.oldclk == 0) {
            if (ud == 0) {
                this.value++;
            } else {
                this.value--;
            }
        }

        this.value = (this.value+10) % 10;
        this.oldclk = clk;

        this.terminals[8].value = this.value % 2;
        this.terminals[9].value = Math.floor(this.value/2) % 2;
        this.terminals[10].value = Math.floor(this.value/4) % 2;
        this.terminals[11].value = Math.floor(this.value/8) % 2;
    }
}
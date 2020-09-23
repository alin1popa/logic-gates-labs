class Register extends Component {
    constructor(context, x, y) {
        var labels = ["D0", "D1", "D2", "D3", "CLK", "EN", "S1", "S0", "Dsr", "Dsl", "Q0", "Q1", "Q2", "Q3"];
        super(context, x, y, 150, 120, 4, 6, 4, 0, labels, ["Register"]);
    
        this.oldclk = 0;
        this.value = 0;
    }
    
    apply() {
        var d0 = this.terminals[0].value;
        var d1 = this.terminals[1].value;
        var d2 = this.terminals[2].value;
        var d3 = this.terminals[3].value;

        var clk = this.terminals[4].value;
        var en = this.terminals[5].value;
        var s1 = this.terminals[6].value;
        var s0 = this.terminals[7].value;
        var dsr = this.terminals[8].value;
        var dsl = this.terminals[9].value;

        if (en == 0) {
            this.value = 0;
        } else if (s1 == 0 && s0 == 0) {
            // no operation
        } else if (clk == 1 && this.oldclk == 0) {
            if (s1 == 1 && s0 == 0) {
                this.value = Math.floor(this.value/2) + dsl*8;
            } else if (s1 == 0 && s0 == 1) {
                this.value = (this.value*2)%16 + dsr;
            } else if (s1 == 1 && s0 == 1) {
                this.value = d0 + d1*2 + d2*4 + d3*8;
            }
        }
        
        this.oldclk = clk;

        this.terminals[10].value = this.value % 2;
        this.terminals[11].value = Math.floor(this.value/2) % 2;
        this.terminals[12].value = Math.floor(this.value/4) % 2;
        this.terminals[13].value = Math.floor(this.value/8) % 2;
    }
}
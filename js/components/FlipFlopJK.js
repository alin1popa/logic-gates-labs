class FlipFlopJK extends Component {
    constructor(context, x, y) {
        var labels = ["J", "K", "CLR", "CLK", "Q", "!Q"];
        super(context, x, y, 60, 60, 2, 2, 2, 0, labels, ["JK"]);

        this.oldclk = 0;
    }
    
    apply() {
        var j = this.terminals[0].value;
        var k = this.terminals[1].value;
        var clr = this.terminals[2].value;
        var clk = this.terminals[3].value;

        if (clr == 0) {
            this.terminals[4].value = 0;
        } else {
            if (this.oldclk == 1 && clk == 0) {
                if (j == 0 && k == 0) {
                    // nop
                } else if (j == 0 && k == 1) {
                    this.terminals[4].value = 0;
                } else if (j == 1 && k == 0) {
                    this.terminals[4].value = 1;
                } else if (j == 1 && k == 1) {
                    this.terminals[4].value = !this.terminals[4].value;
                }
            }
            this.oldclk = clk;
        }

        this.terminals[5].value = !this.terminals[4].value;
    }
}
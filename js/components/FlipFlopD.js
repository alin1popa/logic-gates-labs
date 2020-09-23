class FlipFlopD extends Component {
    constructor(context, x, y) {
        var labels = ["D", "!EN", "CLK", "Q", "!Q"];
        super(context, x, y, 52, 52, 1, 2, 2, 0, labels, ["D"]);

        this.oldclk = 0;
    }
    
    apply() {
        var d = this.terminals[0].value;
        var en = this.terminals[1].value;
        var clk = this.terminals[2].value;

        if (en == 0) {
            if (this.oldclk == 0 && clk == 1) {
                this.terminals[3].value = d;
            }
            this.oldclk = clk;
        }

        this.terminals[4].value = !this.terminals[3].value;
    }
}
class Mux81 extends Component {
    constructor(context, x, y) {
        var labels = ["I0", "I1", "I2", "I3", "I4", "I5", "I6", "I7", "S2", "S1", "S0", "!EN", "Y"];
        super(context, x, y, 90, 170, 8, 4, 1, 0, labels, ["MUX 8:1"]);
    }
    
    apply() {
        var en = this.terminals[11].value;
        var sel = 4*this.terminals[8].value + 2*this.terminals[9].value + 1*this.terminals[10].value;
        this.terminals[12].value = (!en) && this.terminals[sel].value;
    }
}
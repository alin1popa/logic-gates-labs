class Decoder extends Component {
    constructor(context, x, y, defaultval, title) {
        var labels = ["S0", "S1", "S2", "!EN", "Y0", "Y1", "Y2", "Y3", "Y4", "Y5", "Y6", "Y7"];
        super(context, x, y, 90, 170, 3, 1, 8, 0, labels, title);
        this.default = defaultval;
    }
    
    apply() {
        var en = this.terminals[3].value;
        var sel = 4*this.terminals[2].value + 2*this.terminals[1].value + 1*this.terminals[0].value;

        for (var i=4; i<this.terminals.length; i++) {
            this.terminals[i].value = (!en) && this.default;
        }

        this.terminals[4+sel].value = (!en) && (!this.default);
    }
}
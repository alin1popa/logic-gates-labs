class Decoder extends Component {
    constructor(context, x, y, defaultval) {
        super(context, x, y, 90, 170, 3, 1, 8, 0);
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
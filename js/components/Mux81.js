class Mux81 extends Component {
    constructor(context, x, y) {
        super(context, x, y, 90, 170, 8, 4, 1, 0);
    }
    
    apply() {
        var en = this.terminals[11].value;
        var sel = 4*this.terminals[8].value + 2*this.terminals[9].value + 1*this.terminals[10].value;
        this.terminals[12].value = (!en) && this.terminals[sel].value;
    }
}
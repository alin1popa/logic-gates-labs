class BoardSequential extends Board {
    constructor(context, x, y) {
        var gates = [];
        
        for (var i=0; i<8; i++) {
            //gates.push(new FlipFlopJK(context, x+40+i*120, y+50))
            //gates.push(new FlipFlopD(context, x+40+i*120, y+140))
            gates.push(new FlipFlopD(context, x+40+i*125, y+50))
        }
        for (var i=0; i<3; i++) {
            for (var j=0; j<2; j++) {
                gates.push(new FlipFlopJK(context, x+40+i*125, y+150+j*100))
            }
        }
        gates.push(new Counter74HC190(context, x+420, y+160))
        gates.push(new Counter74HC193(context, x+620, y+160))
        gates.push(new Register(context, x+820, y+160))
        
        var width = 1010;
        var height = 345;
            
        super(context, gates, x, y, width, height);
    }
}
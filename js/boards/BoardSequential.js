class BoardSequential extends Board {
    constructor(context, x, y) {
        var gates = [];
        
        for (var i=0; i<4; i++) {
            gates.push(new FlipFlopJK(context, x+50+i*165, y+50))
            gates.push(new FlipFlopD(context, x+50+i*165, y+200))
        }
        
        var width = 685;
        var height = 485;
            
        super(context, gates, x, y, width, height);
    }
}
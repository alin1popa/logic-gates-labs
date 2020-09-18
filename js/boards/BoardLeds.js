class BoardLeds extends Board {
    constructor(context, x, y) {
        var gates = [];
        
        for (var i=0; i<2; i++) {
            for (var j=0; j<10; j++) {
                gates.push(new Led(context, x+20+i*60, y+70+j*25));
            }
        }

        gates.push(new Display16(context, x+160, y+60));
        gates.push(new Display16(context, x+160, y+200));
        
        var width = 250;
        var height = 320;
            
        super(context, gates, x, y, width, height);
    }
}
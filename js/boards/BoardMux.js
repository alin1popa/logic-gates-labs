class BoardMux extends Board {
    constructor(context, x, y) {
        var gates = [];
        
        for (var i=0; i<4; i++) {
            gates.push(new Mux81(context, x+50+i*165, y+50))
        }
        
        for (var i=0; i<2; i++) {
            gates.push(new Decoder74HC138(context, x+50+i*165, y+270))
            gates.push(new Decoder74HC238(context, x+50+330+i*165, y+270))
        }
        
        var width = 685;
        var height = 485;
            
        super(context, gates, x, y, width, height);
    }
}
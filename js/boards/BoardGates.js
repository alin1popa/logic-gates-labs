class BoardGates extends Board {
    constructor(context, x, y) {
        var gates = [];
        
        for (var j=0; j<6; j++) {
            gates.push(new NotGate(context, x+20, y+70+j*30));
            gates.push(new NotGate(context, x+20, y+270+j*30));
            gates.push(new NotGate(context, x+20, y+470+j*30));
        }
        
        for (var j=0; j<4; j++) {
            gates.push(new NandGate2(context, x+125, y+74+j*47));
            gates.push(new NandGate2(context, x+125, y+274+j*47));
            gates.push(new NorGate2(context, x+125, y+474+j*47));
            gates.push(new NorGate2(context, x+335, y+274+j*47));
        }

        for (var j=0; j<3; j++) {
            gates.push(new NandGate3(context, x+230, y+83+j*61));
            gates.push(new NandGate3(context, x+230, y+283+j*61));
            gates.push(new NorGate3(context, x+230, y+483+j*61));
        }

        for (var j=0; j<2; j++) {
            gates.push(new NandGate4(context, x+335, y+100+j*90))
        }
        
        var width = 425;
        var height = 650;
            
        super(context, gates, x, y, width, height);
    }
}

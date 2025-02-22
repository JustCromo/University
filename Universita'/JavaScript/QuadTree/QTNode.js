class QTNode{

    punto;
    primo = null;
    secondo = null;
    terzo = null;
    quarto = null;

    constructor([x,y]){
        this.punto = [x,y];
    }

    add(n){
        
        if(n.punto[0] >= this.punto[0]){
            // primo e quarto
            if(n.punto[1] >= this.punto[1]){
                //primo
                console.log('1st quad')
                if(!this.primo) this.primo = n;
                else this.primo.add(n);
            }else{
                //quarto
                console.log('4th quad')
                if(!this.quarto) this.quarto = n;
                else this.quarto.add(n);
            }
        }else{
            // secondo o terzo
            if(n.punto[1] >= this.punto[1]){
                //secondo
                console.log('2nd quad')
                if(!this.secondo) this.secondo = n;
                else this.secondo.add(n);
            }else{
                //terzo
                console.log('3rd quad')
                if(!this.terzo) this.terzo = n;
                else this.terzo.add(n);
            }
        }

    }

    find([x,y]){

        if(this.punto[0] == x && this.punto[1] == y){
            return this;
        }else{
            if(x >= this.punto[0]){
                // primo e quarto
                if(y >= this.punto[1]){
                    //primo
                    if(this.primo) return this.primo.find([x,y]);
                }else{
                    //quarto
                    if(this.quarto) return this.quarto.find([x,y]);
                }
            }else{
                // secondo o terzo
                if(y >= this.punto[1]){
                    //secondo
                    if(this.secondo) return this.secondo.find([x,y]);
                }else{
                    //terzo
                    if(this.terzo) return this.terzo.find([x,y]);
                }
            }
        }

        return null;
    }

    get maxd(){

        let val_primo = 0;
        let val_secondo = 0;
        let val_terzo = 0;
        let val_quarto = 0;

        if(this.primo) val_primo += this.primo.maxd;
        if(this.secondo) val_secondo += this.secondo.maxd;
        if(this.terzo) val_terzo += this.terzo.maxd;
        if(this.quarto) val_quarto += this.quarto.maxd;

        return Math.max(val_primo, val_secondo, val_terzo, val_quarto) + 1;

    }

    get mind(){

        let val_primo = Infinity;
        let val_secondo = Infinity;
        let val_terzo = Infinity;
        let val_quarto = Infinity;
        
        if(this.primo){
            val_primo = 0;
            val_primo += this.primo.mind;
        } 
        if(this.secondo){
            val_secondo = 0;
            val_secondo += this.secondo.mind;
        } 
        if(this.terzo){
            val_terzo = 0;
            val_terzo += this.terzo.mind;
        } 
        if(this.quarto){
            val_quarto = 0;
            val_quarto += this.quarto.mind;

        }
        
        if(Math.min(val_primo, val_secondo, val_terzo, val_quarto) == Infinity) return 1;
        else return Math.min(val_primo, val_secondo, val_terzo, val_quarto) + 1;
    }
}

class QTree{

    root = null;
    size = 0;

    addPoint([x,y]){
        console.log('Node: ' + [x,y] + 'goes ')
        let n = new QTNode([x,y]);
        this.size++;
        if(this.root) this.root.add(n);
        else this.root = n;
    }

}

var assert = require('assert');

var P=[
    [1,1], [2,2], [-5,0], [2,7], [1,-3], [2,2], [2,3], [-1,-4], [0,0],
    [5,-3], [-2,-4], [3,1]
]
var qt=new QTree()
for (var p of P) {
    qt.addPoint(p);
}
assert.equal(qt.size,P.length)
assert.equal(qt.root.maxd,5)
assert.equal(qt.root.mind,1)




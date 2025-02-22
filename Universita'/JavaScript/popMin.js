Array.prototype.popMin = function(){

    if(this.length == 0) return undefined;
    else{

        let p = 0;
        
        for(let i=0;i<this.length;i++){
            if( this[i] < this[p]){
                p = i;
            }
        }

        return this.splice(p, 1)[0];
    }
}

/*

Si scriva un frammento di codice JavaScript che aggiunga a tutti gli array del programma un metodo popMin() con il seguente funzionamento:

se l'array è vuoto, il metodo restituisce undefined
altrimenti, il metodo restituisce l'elemento di valore minimo contenuto nell'array, e lo rimuove dall'array
Per determinare il minimo, popMin() deve utilizzare gli operatori relazionali del linguaggio (<, >=, ecc.).

*/
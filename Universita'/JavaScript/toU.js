/*
Scrivete un frammente di codice JavaScript che aggiunga a tutte le stringhe del programma un metodo toU() che restituisce una nuova stringa,
identica alla stringa data, ma in cui tutte le vocali minuscole sono sostituite da "u" e le vocali maiuscole da "U".
*/

let map = {
    "a":"u", "A":"U","e":"u","E":"U","i":"u","I":"U","o":"u","O":"U"
}

String.prototype.toU = function(){
    return this.replace(/[aeioAEIO]/g, match => map[match]);
};

let b = "Appalachian Mountain";

console.log(b.toU());
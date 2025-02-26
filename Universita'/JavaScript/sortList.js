let a = ["Ivan", "Turris", "Bimo", "Claudio", "Davyd", "Sbrizio", "Flavio", "Gabri", "Leo", "Luca", "Mimmo"];

// 11 persone

let b = ["sfondo", "colore", "parola", "ogg", "ogg", "ogg", "ogg", "ogg", "ogg", "ogg", "ogg"]

function creaCoppia(array1, array2) {
    const array1Copy = [...array1];
    const array2Copy = [...array2];
    const coppie = [];

    while (array1Copy.length > 0) {
        // Estrai un indice casuale per ciascun array
        const index1 = Math.floor(Math.random() * array1Copy.length);
        const index2 = Math.floor(Math.random() * array2Copy.length);

        // Rimuovi gli elementi dagli array e crea la coppia
        const elem1 = array1Copy.splice(index1, 1)[0];
        const elem2 = array2Copy.splice(index2, 1)[0];

        coppie.push([elem1, elem2]);
    }

    return coppie;
}

console.log(creaCoppia(a, b));
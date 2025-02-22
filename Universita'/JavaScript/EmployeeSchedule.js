class Employee {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get id() {
        return this.surname + this.name;
    }
}

class Schedule {
    #tasks;

    constructor() {
        this.#tasks = new Map(); // Utilizzo di una Map per una gestione efficiente.
    }

    add(task, employee) {
        const employeeId = employee.id;
        if (!this.#tasks.has(employeeId)) {
            this.#tasks.set(employeeId, []);
        }
        this.#tasks.get(employeeId).push(task);
    }

    getTasks(employee) {
        const employeeId = employee.id;
        if (!this.#tasks.has(employeeId)) {
            return []; // Restituisce una lista vuota se l'impiegato non è presente.
        }
        return this.#tasks.get(employeeId).sort(); // Ordina lessicograficamente.
    }

    free(employee) {
        const employeeId = employee.id;
        if (!this.#tasks.has(employeeId)) {
            throw new MissingEmployeeError(`Employee ${employeeId} non esiste`);
        }
        this.#tasks.delete(employeeId); // Rimuove tutti i task associati all'impiegato.
    }
}

class MissingEmployeeError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingEmployeeError";
    }
}


/*

In JavaScript, si definisca una classe Employee per rappresentare gli impiegati di una ditta, in termini dei loro name e surname. La classe Employee deve inoltre fornire un getter id che restituisca l'identificatore di ciascun impiegato, calcolato concatenando cognome e nome dell'impiegato stesso.



Si definisca poi una classe Schedule per la gestione dei task assegnati agli impiegati di una ditta. L'insieme di tutti i task deve essere privato alla classe. La classe deve inoltre fornire i seguenti metodi:

add(task,employee) per l’assegnamento del task (stringa) all’employee passato in input.
getTasks(employee), che restituisce un array contenente i task assegnati a employee, ordinati lessicograficamente in ordine crescente. Se l'employee non è presente, restituisce la lista vuota.
free(employee) per liberare employee, eliminando tutti i suoi task (lanciando l’eccezione MissingEmployeeError quando employee non esiste).


NB: Saranno preferite le soluzioni che sfruttino strutture dati efficienti per associare gli employee ai loro task.

*/
enum Code{
    White = 0,
    Green = 1,
    Yellow = 5,
    Red = 10
}

enum Age{
    Baby = 5,
    Child = 2,
    Adult = 0,
    Elder = 1
}

type Urgency = [Code, Age];

function triage(patients:Urgency[]):Urgency[]{

    function sortUrge(a:Urgency, b:Urgency):number{

        if( a[0] + a[1] > b[0] + b[1]) return -1
        else if(a[0] + a[1] == b[0] + b[1]){
            if(a[0] > b[0]) return -1
            else return 1;
        }
        else return 1
    }

    patients.sort(sortUrge);

    return patients;

}


/*

Si consideri la gestione del processo di triage di un pronto soccorso, enumerando

i codici (Code) che denotano le priorità per pazienti in ingresso, ovvero White (priorità 0), Green (priorità 1), Yellow (priorità 5), Red (priorità 10)
i modificatori di priorità dovuti all'età (Age), ovvero Baby (+5), Child (+2), Adult (+0), Elder (+1)
Si definisca quindi il tipo Urgency, come una coppia [Code,Age].



Infine, si definisca una funzione triage(patients) che, dato un array di Urgency, lo ordini in place per priorità descrescente (con la priorità calcolata come quella data da Code a cui si somma il modificatore dato da Age). A parità di valore, priorità maggiore è data a codici (Code) più alti.



La soluzione deve essere scritta in TypeScript, definendo opportunamente i tipi, e non usando any o unknown.

*/
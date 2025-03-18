class EmptyArgsError extends Error {
	constructor (message){
		super(message);
		this.name = 'EmptyArgsError'
	}
}

class BadArgError extends Error {
	#index;
	#value;
	constructor (message, index, value){
		super(message)
		this.name = 'BadArgError'
		this.#index = index;
		this.#value = value;
	}
	get index() {
		return this.#index
	}
	get value() {
		return this.#value
	}
}

class OutOfRangeError extends BadArgError {
	constructor (message, index, value){
		super(message, index, value);
		this.name = 'OutOfRangeError'
	}
}

class NotIntegerError extends BadArgError{
    	constructor (message, index, value){
		super(message, index, value);
        	this.name = "NotIntegerError";
    	}
}

class NotPrimeError extends BadArgError{
    	constructor (message, index, value){
		super(message, index, value);
        	this.name = "NotPrimeError";
    	}
}

function isPrime(n){
	let rN = Math.floor(Math.sqrt(n))
	for (let q = 2; q<=rN; q++) if (n%q == 0) return false
	return n!=1
}

function schizzinosa(...seq){
	if(seq.length == 0) throw new EmptyArgsError("La sequenza e' vuota bleh!")
	let somma = 0;
	
	for (let i = 0; i < seq.length; i++) {
		if (seq[i] <= 0 || seq[i] >= 1000) throw new OutOfRangeError("Ma che numero hai messo?! Tra 1 e 999 o fa schifo!", i, seq[i])
		if (!Number.isInteger(seq[i])) throw new NotIntegerError("Oh mio dio che sarebbe sto numero con la virgola 🤮", i, seq[i])
		if (!isPrime(seq[i])) throw new NotPrimeError("Mi sento male, che cosa sarebbe un numero del genere... non primo...", i, seq[i])
		somma += seq[i];
	}
	return somma;
}
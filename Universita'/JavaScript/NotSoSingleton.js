class NotSoSingleton {
    #x;
    static count = 0;
    static last_in = undefined;
  
    constructor(x) {
      if(NotSoSingleton.count>=3){ throw new ThreesomeError("Errore"); }
        
      this.#x = x;
      NotSoSingleton.count++;
      NotSoSingleton.last_in = this;
      
    }
  
    get value() {
      return this.#x;
    }
  
    static get last(){
      return NotSoSingleton.last_in;
    }
    
  }
  
  class ThreesomeError extends Error{
      constructor(message){
          super(message)
          this.name = "ThreesomeError";
      }
  }
  
  
  var a = new NotSoSingleton(3);
  var b = new NotSoSingleton(1);
  var c = new NotSoSingleton(9);
  
  console.log(a.value)
  console.log(b.value)
  console.log(c.value)
  
  try{
    var d = new NotSoSingleton(2);
    console.log(d.value)
  }catch(e){
    console.log("Errore")
  }
  
  
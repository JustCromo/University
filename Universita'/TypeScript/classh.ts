function classh(o:Object):String[]{
  
    let a:String[] = [];
    let s:String;
    
    do{
      
      o = Object.getPrototypeOf(o);
      s = o.constructor.name;
      a.unshift(s);
  
    }while(o.constructor.name != "Object");
  
    return a;
  
  }
  
  var o : Object = new Object ()
  console.log(classh(o))
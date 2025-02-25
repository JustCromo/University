function callCounted(f){
  
    let g = f;
    let flag = false;
    
    g = function() {
      if(!flag){
        g.call = 0;
      } else g.call++;
      
    }
  
    return g;
  }
  
  
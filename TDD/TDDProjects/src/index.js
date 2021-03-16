function getAverage(marks){
  return Math.floor(marks.reduce((x,y) => x + y) / marks.length);
 }

// Numbers to Letters
function switcher(x){
    var newArray = [];
    var alphabet = " ?!abcdefghijklmnopqrstuvwxyz".split("").reverse();
    
    for(j = 0; j < x.length; j++){
      for(i = 0; i <= alphabet.length; i++){    
       if(i == x[j]){
         newArray.push(alphabet[i - 1]);
       } 
      }
    }
    return newArray.join("");
  }

  // module.exports = switcher;
  // module.exports = getAverage;
 
  module.exports = {
    switcher,
    getAverage
  }
  

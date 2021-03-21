// Do I get a bonus?
function bonusTime(salary, bonus) {
  var increase = salary * 10;
  var aw = ['£']
  return bonus ? aw + increase: aw + salary;
}


//Incorrect division method
// const solve = (x, y) => x / y

// Get the next prime number!
// function nextPrime(n) {
//   if ( ++n < 2 ){ return 2 }
  
//   for ( let i = 2; i <= Math.sqrt(n); i++ ){
//     if ( n % i === 0 ){
//       return nextPrime(n); 
//     }
//   }
//   return n;
// }


//Over the road
// function overTheRoad(address, n){
//   return (n * 2) + 1 - address
// }


//Numbers to Letters
// function switcher(x){
//   var alphabet = ' zyxwvutsrqponmlkjihgfedcba!? ';
//   return x.map(aw => alphabet[aw]).join("");
// }

//Find The deleted number
// function findDeletedNumber(arr, mixArr) {
//   for(i = 0; i < arr.length; i++){
//     if(!mixArr.includes(arr[i])){
//       return arr[i];
//     }
//   }
//   return 0;
// }

// Move all Vowels
// function moveVowel(input) {
//   var vowels = "aeiou";
//   var vowel = "";
//   var consonants = "";
//   for(i = 0; i < input.length; i++){
//     if(vowels.includes(input[i])){
//       vowel += input[i];
//     }else{
//       consonants += input[i]
//     }
//   }
//   return consonants + vowel;
// }


// // Sum of Triangular Numbers
// function sumTriangularNumbers(n) {
//   var sum = 0, total = 0;
//   for(let i = 1; i <= n; i++){
//     sum += i;
//     total += sum;
//   }
//   return total;
// }

// function getAverage(marks){
//   return Math.floor(marks.reduce((x,y) => x + y) / marks.length);
//  }

// Numbers to Letters
// function switcher(x){
//     var newArray = [];
//     var alphabet = " ?!abcdefghijklmnopqrstuvwxyz".split("").reverse();
    
//     for(j = 0; j < x.length; j++){
//       for(i = 0; i <= alphabet.length; i++){    
//        if(i == x[j]){
//          newArray.push(alphabet[i - 1]);
//        } 
//       }
//     }
//     return newArray.join("");
//   }

  // module.exports = switcher;
  // module.exports = getAverage;
  // module.exports = sumTriangularNumbers;
  // module.exports = moveVowel;
  // module.exports = findDeletedNumber;
  // module.exports = switcher;
  // module.exports = overTheRoad;
  // module.exports = nextPrime;
  // module.exports = solve;
module.exports = bonusTime;
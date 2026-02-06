//write a js function to convert a roman numeral string into an integer
//Example : "III" -> 3

function romanToInt(roman) {
    let sum = 0
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
for(let i = 0; i < roman.length; i++){
    let curr = romanMap[roman[i]]
    let nxt = romanMap[roman[i+1]||0]
    if(curr<nxt){
        sum = sum - curr
    }else{
        sum = sum + curr
    }
}
return sum
}
const result = romanToInt("IX");
console.log(result);

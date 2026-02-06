//write a js function that generate a random number from 0 to  a 
//specified value , including the specified value

function radomNumber(a){
    let num=Math.floor(Math.random()*a+1)
    return num
}
let number=56
const result = radomNumber(number)
console.log(`Generate a random number from 0 to include ${number} is : ${result}`)
//generate a random number from 0 ti a specified value ,
//excluding the specific value

function generateRandomNum(a){
    let num=Math.floor(Math.random()*a)
    
    return num
}
let number=56
const result = generateRandomNum(number)
console.log(`Generate a random number from 0 to ${number} is : ${result}`)
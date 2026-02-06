// reverse the order of the word and also reverse the characters of each word

//input : "Welcome to javascript"
//output : "tpircsavaj ot emocleW"

function reverseString(str){
    return str.split("").reverse().join("")
    
}
const result=reverseString("Welcome to javascript")
console.log(result)
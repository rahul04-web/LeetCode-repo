//input : "Welcome to js"
//output : "emocleW ot sj"

function reverseString(str){
    let arr=str.split(" ")
    
    const reverseWord= arr.map((ele)=>ele.split("").reverse().join(""))
    return reverseWord.join(" ")

}
const result=reverseString("Welcome to js")
console.log(result)
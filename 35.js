//js function that write a character in alphabetical order of a given string 
//input : "javascript"
//output: "aacijprstv"

function orderChar(str){
    return str.replace(/\s+/g, "").toLowerCase().split("").sort().join("")
}
const result=orderChar("hello word")
console.log(result)
//write js function that takes a string as input and return an array of 
//all the numeric value present in the string

function extractNumber(str){
    return str.match(/\d/g).map((ele)=>Number(ele))
}
const result =extractNumber("shsdkl354dfsdf4d4fd54d65f")
console.log(result)




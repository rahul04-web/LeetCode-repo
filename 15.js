//convert a string in pascle case
//what is pascleCase?? hello word => HelloWord

function toPascleCase(str){
    str = str.trim().split("")
    let upperLower=str.map((element)=>element.charAt(0).toUpperCase()
+element.substring(1).toLowerCase())
let pascle=upperLower.join('')
return pascle
}


let str="hello word"
const result =toPascleCase(str)
console.log(`Pascle Case of the ${str} is : ${result}`)
//write a js function that merges two objects combining all their prperties

function mergeobj(obj1,obj2){
    let obj={...obj1,...obj2} 
    return obj
}
let obj1={
    a:1 ,
    b:30
},obj2={
    c:56,
    d:45
}
const result= mergeobj(obj1,obj2)
console.log(result)
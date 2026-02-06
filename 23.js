//write a js that merge array and obj 

function mergeObjArr(){
    if(Array.isArray(arr)&&Array.isArray(obj)){
        return [...arr,...obj]
    }else if(typeof arr =="object" && typeof obj =="object" && !Array.isArray(arr)&& !Array.isArray(obj)){
        return {...arr,...obj}
    }else{
        return "Error: inpute are of different type"
    }
}

let arr = ["sanika",89,65,"varad"]
let obj = {a:"name",b:"age",arrO:[55,6663,"obj"],c:56}

const result =mergeObjArr(arr,obj)
console.log(result)
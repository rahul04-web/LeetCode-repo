//write a js fn to find the common keys
//and theire values in two objects

//inp const obj = {a:1 , b:2 , c:3, d:4}
// const obj = {a:2, c:3, d:4}
// op : {b:2 , c:3}

//aproach use for in loop to compare one obj to another obj

const findCommonKeysInObj=(obj1 , obj2)=>{
    const commonKey={}
    for(let key in obj1){
        if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key) && obj1[key]===obj2[key]){
            
            commonKey[key]=obj1[key]
        }
    }
    console.log(commonKey)
}
const obj1 = {a:1 , b:2 , c:3, d:4}
const obj2 = {a:2, c:3, d:4}
findCommonKeysInObj(obj1,obj2)

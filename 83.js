// write a js fn that reverse the order of keys and values 
//in an object

function reverseKeysAndValues(obj){
    let result = {}

    for(const [keys , val] of Object.entries(obj)){
        result[val] = keys
    }
    console.log(result)
}
reverseKeysAndValues({a:1,b:2,c:3})
//write a js fn to check whether all values in an 
// object are of the same data type

function areValuesSameDataType(obj){
    let value = Object.values(obj)

    if(value.length==0){
        console.log(true)
        return 
    }
    let firstType= typeof value[0]
    console.log(firstType)

    let result = value.every((ele)=>typeof ele === firstType)
    console.log(result)
}
areValuesSameDataType({})
areValuesSameDataType({a:true,b:false,c:true})
areValuesSameDataType({a:5 , b:"text",c:6})
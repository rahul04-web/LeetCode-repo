//write a js fn to takes an obj and converts into 
//an array containing two subarray

//inp : {a:1,b:2,c:3,d:4}
//op : [ [ 'a', 'b', 'c', 'd' ], [ 1, 2, 3, 4 ] ]

function convertObjToArray(obj){
    const key=Object.keys(obj)
    const val=Object.values(obj)
    const result = [key,val]
    console.log(result)
}
const obj={a:1,b:2,c:3,d:4}
convertObjToArray(obj)
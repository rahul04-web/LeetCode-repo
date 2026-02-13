// Write a js fn to cal average in given array
//inp : [10,20,30,40]

function avgOfArray(arr){
    const SumAllArr=arr.reduce((acc,currVal)=>{
     return acc + currVal
    })
    return SumAllArr/arr.length
}
const result = avgOfArray([10,20,30,40])
console.log(result)
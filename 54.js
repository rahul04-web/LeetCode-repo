// write a js function to find the square of each ele in arr

function squareOfArr(arr){
    
    const newSquaredArray= arr.map((e)=>{
       return Math.pow(e,2)
    })
    return newSquaredArray

}
const arr = [1,3,2,4,53,5];
console.log(squareOfArr(arr))

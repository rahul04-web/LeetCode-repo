//write a js fn to find all the missing number in a given range [lower, upper]
//that are not present in the array 

//inp : Array:[10,12,14,15] Range : [10,15]
//op : [11,13]


function findMissingNum(arr,lower , upper){
    const missArray=[]
    for(let i = lower; i <= upper; i++){
        if(!arr.includes(i)){ 
            missArray.push(i)
        }
    }
    return missArray
}
console.log(findMissingNum([10,12,14,15],10,15))
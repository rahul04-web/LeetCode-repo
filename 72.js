//write a js fn to write calculate the prefix sum array of given array 
//inp : [2,4,4,2]
//op : [ 2, 6, 10, 12 ]

function prefixSum(arr){
    let sumPrefix=[]
    let sum = 0 
    for(let i = 0; i < arr.length;i++){
        sum+=arr[i]
        sumPrefix.push(sum)
    }
    console.log(sumPrefix)
}
prefixSum([2,4,4,2])
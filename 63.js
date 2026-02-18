//write a js fn to find minimum value in every sliding subarray of 
// size `k`

//inp: [1,-2,-3,-4,5,6,-7]
//k=3
//op:

function findMaxInSubArray(arr,k){
    let result=[]
    for(let i = 0; i<=arr.length-k; i++){
        let temp=[]
        for(let j = i; j<i+k; j++){
            temp.push(arr[j])
        }
        const maxVal=Math.max(...temp)
        result.push(maxVal)
    }
    console.log(result)
}

findMaxInSubArray([1,-2,-3,-4,5,6,-7],7)
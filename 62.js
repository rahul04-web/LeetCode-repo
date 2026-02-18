//write a js fn to find minimum value in every sliding subarray of 
// size `k`

//inp : [1, -2, -3, -4, -5, -6, -7]
// k=3
//op : [-3, -4, -4, -7]

function findMinInSubArray(arr,k){
    let result=[]
     for(let i=0; i<=arr.length -k; i++){
        let temp=[]
        for(j=i; j<i+k; j++){
            temp.push(arr[j])
        }
        const minVal = Math.min(...temp)
        // console.log(minVal)
        result.push(minVal)
     }
     console.log(result)
}

findMinInSubArray([1, -2, -3, -4, -5, -6, -7],3)

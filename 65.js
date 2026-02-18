// find the first positive num in each substring 
//if not any positive num print 0

function findPositiveNumInSubArray(arr,k){
    let result=[]
    for(let i = 0; i <= arr.length -k; i++){
        let temp=[]
        for(let j=i; j <i+k; j++){
            temp.push(arr[j])
        }
        const hasPositive=temp.find(num=>num>0)
        result.push(hasPositive !== undefined ? hasPositive:0)
    }
    console.log(result)
}
findPositiveNumInSubArray([1,-2,-3,-4,5,6,-7],3)
// find the first negative num in each substring

function findFirstNegNum(arr,k){
    let result=[]
    for(let i = 0; i <= arr.length-k; i++){
        
        for(let j = i; j < i+k; j++){
            if(arr[j]<0){
                result.push(arr[j])
                break;
            }
        }
        
    }
    console.log(result)
}
findFirstNegNum([1,-2,-3,-4,5,6,-7],3)
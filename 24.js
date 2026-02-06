//write a js to check max and min element of array

function find(arr){
    const max = Math.max(...arr) 
    const min = Math.min(...arr) 
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]>max){
    //         max = arr[i]
            
    //     }  
    // }
    // return max
    console.log(`max element of array is : ${max}, min element of array is : ${min}`)
    
}
const arr = [4,5,-56,45,64,465]
find(arr)
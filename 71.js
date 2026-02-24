//problem statement 
//you are given task is to print whether array is majestic or not .
//A majestic array is an array whose sum of first three number is equal to last 
//threee number

//print 1 if array is majestic and 0 if it is not 

//inp : [1,2,3,4,6,0,0] op : 1

function isMajestic(arr){
    let sum3=0
    let sum03=0
    for(let i = 0; i< 3; i++){
        sum3 += arr[i]
    }
    for(let i =arr.length-1;i >= arr.length-3;i--){
        sum03+=arr[i]
    }
    if(sum03 === sum3){
        return 1
    }else{
        return 0
    }
}
console.log(isMajestic([1,2,3,9,0,89,4,6,0,0]))
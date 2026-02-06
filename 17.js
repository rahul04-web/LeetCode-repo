//calculate the sum of the all element in a given array of number

function calArrSum(arr){
    // console.log(arr)
    // let sum=0
    // // for(let i = 0; i < arr.length;i++){
    // //     sum +=arr[i]
    // // }


    // return sum

    ///OR
    let total=arr.reduce((acc,ele)=>acc+ele,0)
    return total
}
let arr=[2,8,9]
const result= calArrSum(arr)
console.log(result)


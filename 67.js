//write a js fn to find the minimum element in an array without using sorting

//inp : [3,4,9,1,6]
//op: 1

function minimulEleArray(arr){
    let min = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i]<min){
            min =arr[i]
        }
    }
    console.log(min)
}
minimulEleArray([3,4,9,2,6,1])
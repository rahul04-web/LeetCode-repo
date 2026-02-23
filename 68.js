//write a js fn to find the max ele in arr wthout using 
//sorting

//inp : [3,4,9,1,6]
//op : [9]

function maxInArray(arr){
    let max = arr[0]
    for(let i = 1; i < arr.length;i++){
        if(arr[i]>max){
            max =arr[i]
        }
    }
    console.log(max)
    

}
maxInArray([3,4,9,1,6])
//write a js fn to print the next samller element for each 
//element in the array . If no smaller ele exist , priny -1

//inp : [10,7,9,3,2,1,15]
//op : [7,  3,  3, 2, 1, -1, -1]


function nextSmallerEle(arr){
    let result=[]
    for(let i = 0; i < arr.length; i++){
        let found = false;
        for(let j = i+1; j <arr.length ; j++ ){
            if(arr[i]>arr[j] ){
                result.push(arr[j])
                found = true
                break;
            }
        }
        if(!found){
            result.push(-1)
        }
    }
    console.log(result)
}
nextSmallerEle([10,7,9,3,2,1,15])
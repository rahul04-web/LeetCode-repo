//sorting array witout using inbuilt method

//inp : [5,8,9,7,2,1]

function sortArray(arr){
    const newArr=[]

    for(let i=0; i<arr.length; i++){
        // console.log(i+"i")
        for(let j = i ; j < arr.length; j++){
            // console.log(j+"j")
            if(arr[i]<arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]];
            }
        }
    }
    console.log(arr)
}
sortArray([5,8,9,7,2,1])
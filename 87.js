//write a fn to create an obj with keys as numbers and values as theire squares

//inp : 2
//op : {1:1,2:4}

function squareOfKeysAsValues(num){
    let result={}
    for(let i= 1;i<=num;i++){
        result[i]=i
    }
    console.log(result)
}

squareOfKeysAsValues(5)
//write a js fn that swap the keys and values of an object

//inp : { a : 1 , b : 2 , c : 3}
//op : {}

function swapKeysAndVal(obj){
    let swapped = {}

    for(const [key,value] of Object.entries(obj)){
        swapped[value]=key;
    }
    console.log(swapped)
}
const obj={ a : 1 , b : 2 , c : 3};
swapKeysAndVal(obj)
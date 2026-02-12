//inp : [2,3,4]
//op : 24
// product of all ele in arr

function productOfArrEle(arr){
    let eleMul = 1
    return arr.reduce((acc,cv)=>{
        return acc*cv
    })
}

const arr = [2,3,4]
const result = productOfArrEle(arr)
console.log(result)
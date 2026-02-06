// write a js fn to rotate an array 'k' times

//input : `array = [1,2,3,4],reotation = 2`
//op : `[4,5,1,2,3]`

function rotateKTimes(arr,roatation){
    for(let i = 1; i <= roatation; i++){
        const lastEle = arr.pop()
        arr.unshift(lastEle)
    }
    return arr
}
const result=rotateKTimes([1,2,3,4,5,6],2)
console.log(result);


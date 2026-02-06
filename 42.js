//write a js fn to check if two arrays have the same element regardless of order

//example:
// [1,2,3,4] and [4,3,2,1] array are equal

function toCheck(arr1,arr2){
    if(arr1.length != arr2.length){
        return 'array is not same'
    }
    const sort1 = arr1.sort()
    const sort2 = arr2.sort()
    for(let i = 0; i < sort1.length; i++){
        if(sort1[i] !== sort2[i]){
            return 'array is not same'
    }
    }
    return 'array is same'
}
const arr1 = [2,8,4]
const arr2 = [2,3,4,1]
console.log(toCheck(arr1,arr2))
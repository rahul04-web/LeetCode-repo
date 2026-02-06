//remove all occurrence of given value from an array

function removeKay(arr,key){
   return   arr.filter((ele)=> ele!== key)
}
console.log(removeKay([1,2,8,3,4,2,5,2,29,2],2))

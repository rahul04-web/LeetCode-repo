//write a js fn to calculate the sum of all odd numeric values in an array

function oddValueSum(obj){
    let arr = Object.values(obj).map((ele)=>parseInt(ele))

    let odd = arr.filter((ele)=>!isNaN(ele) && ele%2!==0)
    console.log(odd)
    let sum = odd.reduce((acc,curr)=>acc+curr,0)
    console.log(sum)
}
oddValueSum({a:10,b:5,c:"text",d:"9"})
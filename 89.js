//write a js fn  to calculate the sum of all even numeric values in an obj

function calculate(obj){
    let arr = Object.values(obj)
    let value=arr.map((ele)=>parseInt(ele))
    console.log(value)
    let even = value.filter((ele)=> !isNaN(ele) && ele%2===0)
    console.log(even)
    let sum = even.reduce((acc,curr)=>acc+curr,0)
    console.log(sum)
}
calculate({a:1,b:10,c:"text",d:"2"})
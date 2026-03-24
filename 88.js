//write a js fn to calculate the sum of all numeric values
//in an obj

function sumOfValueInObj(obj){
    let arr = Object.values(obj)

    let num = arr.map((ele)=>parseInt(ele))
    console.log(num)
    console.log(typeof arr[2])
    let value=num.filter((ele)=> !isNaN(ele))
    console.log(value)
    let sum = value.reduce((acc,curr)=>acc+curr,0)
    console.log(sum)
}
sumOfValueInObj({a:1,b:5,c:"text",d:9})
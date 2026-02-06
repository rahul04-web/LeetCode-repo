//merge the two array 

function mergeArr(arr1,arr2){
    let me= [...arr1,...arr2]
    return me
}
let arr1=[89,6,65,465,obj= {a:"Rahul",b:"Amit"},"need",55],arr2=[5,'Poart',objec = {fname:"aray0",age:55}]


const result=mergeArr(arr1,arr2)
console.log(`merged array is :  `,result)
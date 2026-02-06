//Write a js function that checks if a number is an Armstrong number

function isArmstrong(n){
    let arr=n.toString()
    let length=arr.length
    let sum=0
    for(let i = 0; i < length; i++){
        let digit=parseInt(arr[i])
        sum += Math.pow(digit,length)
    }
    if(n==sum){
        return `The given ${n} is Armstrong number`
    }
    else{
        return `The given ${n} is not Armstrong number`
    }
}

const result=isArmstrong(153)
console.log(result)
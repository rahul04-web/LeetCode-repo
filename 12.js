// calculating the sum of the digit of given number


function sumDigit(number){
    let numArr=number.toString().split('')
    let sum=0
    for(let i = 0; i < numArr.length;i++){
        sum += parseInt(numArr[i])
    }
    return sum
}

const result =sumDigit(565)
console.log(result)

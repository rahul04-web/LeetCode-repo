//calculate the sum of range upper and lower bound

function sumUpperLower(lower,upper){
    if(lower>upper){
        return "Lower bound must be less than or equal to upper bound"
    }
    let sum = 0
    for(let i = lower; i<=upper; i++){
        sum +=i
    }
    return sum
}
console.log(sumUpperLower(9,5 ))
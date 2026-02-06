//write a js function that calculate the factorial of any given number

function factorial(n){
    if(n<0){
        return "Factorial is not defined for negative numbers"
    }
    let multi=1;
    for(let i = 1; i <= n; i++){
        multi *= i;
    }
    return multi
}

const result=factorial(5)
console.log("The factorial is: "+result)
//prime or not

function isPrime(number){
    if(number <=1){
        console.log("The given number is not Prime number : ",number); 
        return false;
    }
    for(let i = 2; i < number; i++){
        if(number%i==0){
            console.log('the number is not Prime: ',number);  
            return false
        }
    }
    console.log('The given number is Prime :',number)
    return true;
    
}

isPrime(2)
 //Write a js function that calculate the sum of all even number
//1 to a number
 function sumOfEven(n){
    let sum=0
    for(let i = 1; i <= n; i++){
        if(i%2==0){
            sum += i;
        }
    }
    return sum
 }

 const a =sumOfEven(5)
 console.log(`The sum of even number is : `,a);
 
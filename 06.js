//Write a js function that calculate the sum of all odd number
//1 to a number

function sumOfOddNumber(start,end){
    let sum=0;
    if(start<end){
        for(let i= start; i <= end; i++){
        if(i%2!= 0){
            sum += i;
        }
    }
    }else{
        for(let i= end; i <= start; i++){
        if(i%2!= 0){
            sum += i;
        }
    }
    }
    return sum
}

const result = sumOfOddNumber(5,50)
console.log(`The odd sum is range betn them is: `,result)

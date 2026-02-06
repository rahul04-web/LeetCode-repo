//write a js function that print number from 1 to 100 
//But 
//multiple of 3 print "Fizz" instead the number 
//Multiple of 5 print "Buzz" instead the number 
// For number which are multiple of both 3 and 5 , print "FizzBuzz"

function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
        if(i%3==0&&i%5==0){
            console.log('FizzBuzz')
        }else if (i%3==0) {
            console.log('Fizz')
        } else if(i%5==0) {
            console.log('Buzz')
        }else{
            console.log(i)
        }
    }
}

fizzBuzz()






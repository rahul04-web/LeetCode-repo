//js function that generate a random number betn two specified value,
//including the min and max


function both(min,max){
    let num = Math.floor(Math.random()*(max-min+1))+min
    console.log(num)
}

both(5,10)
//js function that check if the given number lies betn a specified lower 
//and upper bond

function isBelong(upper , lower,key){
    if(upper<=key && lower>=key){
        return "iYes t is belong in the given upper and lower bound"
    }else{
        return "No doest'n lies them"
    }
}
console.log(isBelong(45,89,50))
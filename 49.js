//check a number exclusing the boundaries
function isNotBelong(lower, upper, key){
    if(lower<key && upper >key){
        return "Yes, Its lies strictly within the rangen"
    }else{
        return "NO, Its does not lies strictly within the rangen"
    }
}
console.log(isNotBelong(45,78,45))
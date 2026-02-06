//check the date is in the future or not

function isFuture(inpDate){
    const nowDate = new Date()
    const today = nowDate.toLocaleDateString()
    console.log(today)
    if(today < inpDate){
        return "this is a future date "
    }else{
        return "This is not future date"
    }
}

console.log(isFuture("22-05-2028"))

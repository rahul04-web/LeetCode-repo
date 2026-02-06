//to repeat a given string n time optionally converting it to uppercase or lowercase
//if no case type is provided keep the string unchanged

//repeat()

function repeatString(str , n , caseType){
    //console.log(str , n , caseType)
    let repeated =str.repeat(n)
    //console.log(repeated)
    if(caseType){
        if(caseType=='uppercase'){
            return repeated.toUpperCase()
        }if(caseType=='lowercase'){
            return repeated.toLowerCase()
        }
    }else{
        return repeated
    }
}
const result=repeatString('Hello',3,'lowercase')
console.log(result)
//string manipulation 
//check whether the string is end with a same character or not

function isSameCharAtStartEnd(str){
    
    str = str.replace(/\s/g,"").toLowerCase()
    if(str == "") return "string is empty"
    if(str[0]==str[str.length-1]){
        return "the given string have same char at start and end"
    }else{
        return 'not same'
    }
}
const result=isSameCharAtStartEnd("  ")
console.log(result)
//write a fn to find non repeating char in a string
//inp : swiss op: "w"
//inp aabbvv: op : null

function nonrepChar(str){
    for(let i = 0; i < str.length; i++){
        let char = str[i]
        if(str.indexOf(char)==str.lastIndexOf(char)){
            return char
        }
    }
    return null
}
console.log(nonrepChar("swiss"))
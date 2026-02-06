//count how many times the char appeares in a give string and a character

//input : "hello word"
//op  : 'o' appers 2 times

function countChar(str,char){
    return  str.split(char).length -1
}
const result=countChar("ffffff","f")
console.log(result)
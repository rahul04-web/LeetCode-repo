// count the owels of given string 

function count(str){
    let vowelCount=0
    str=str.toLowerCase()
    let vowelPatt= /[aeiou]/g
    let vowels=str.match(vowelPatt)
    if(vowels){
        return vowelCount=vowels.length
    }else{
        return 0
    }
    
}

let str="dsofueoueiprewhishdsi"
const result=count(str)
console.log(`voewls count : ${result}`)


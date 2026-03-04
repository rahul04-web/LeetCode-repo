//write a function that rearrang the vowels in a string in ascending order 
//while keep the consonants in there original position

//inp : selva  op : salve
//inp : ebcda  op : abcde

function  rearrangesVowels(string){
    let vowels = ["a","e","i","o","u"]
    let voewlList = []
    let charList = new Array(string.length).fill(null)

    for(let i = 0; i < string.length; i++){
        if(vowels.includes(string[i])){
            voewlList.push(string[i])
        }else{
            charList[i]=string[i]
        }
    }
    voewlList.sort()
    
    //step 2
    let vowelsIndex =0 
    for(let i = 0; i < charList.length; i++){
        if(charList[i]==null){
            charList[i]=voewlList[vowelsIndex++]
        }
    }
    console.log(charList)
}
rearrangesVowels("selva")
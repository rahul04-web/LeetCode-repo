//count a vowels and consonants

function countVowelsConsonants(str1){
    const str=str1.replace(/\s+/g,"")
    const vowels=str.match(/[aeiouAEIOU]/g).length
    const consonants = str.length - vowels
    return obj= {
        vowels : vowels,
        consonants : consonants

    }
}
const result=countVowelsConsonants("hhrfjighepv   etvjhdsfj       giewuak")
console.log(result)
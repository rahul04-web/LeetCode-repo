//write a js function that accept string as input and return a logest string length

//split("") >> string la array madhe convert karate
//arr.map((ele)=>{ele.length})
function longestWord(){
    let strSplit=str.split(" ")
    // console.log(strSplit)
    let wordLenght = strSplit.map((ele)=> ele.length)
    // console.log(wordLenght)

    let maxWord = Math.max(...wordLenght)
    console.log(maxWord)
}
const str = "hello this is rahul"
longestWord(str)
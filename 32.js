//calculate the number of uppercase and lowercase in a string

//input : "HarkiRat"
//op : {upercase :2 , lowercase : 6}

function checkUppercaseOrLowercase(str){
    console.log(str)
    const upercaseCount = str.match(/[A-Z]/g).length
    const lowercaseCount = str.match(/[a-z]/g).length
    console.log({
        uppercase : upercaseCount,
        lowercase : lowercaseCount
    })
}
checkUppercaseOrLowercase("HarkiRat")
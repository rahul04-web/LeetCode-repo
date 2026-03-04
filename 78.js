//write a js fn that check if two string are complement (
//together contain all 26 english letters exactly once).

//inp : str1 ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// inp str2 = "EHRST"
//OP : yes

function areComplimentary(str1,str2){
    let combineStr=str1+str2

    const loweCaseStr=combineStr.toLowerCase()

    let uniqueChar = new Set(loweCaseStr)

    if(uniqueChar.size==26 && /^[a-z]+$/.test(loweCaseStr) ){
        console.log("YES")
    }else{
        console.log("NO")
    }
} 
const str1 ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const str2 = "EHRST"; 
areComplimentary(str1,str2)
areComplimentary("advhks","advhks")
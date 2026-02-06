//write a js function to check if one string is an substring of another

//include() >> check karta hai ki koi value array ya string me hai ya nahi


function isSubstring(Ostr,Sstr){
    return Ostr.toLowerCase().includes(Sstr.toLowerCase())
} 
const Ostr = "Hello , this is a Rahul"
const Sstr = "helLo"
const result=isSubstring(Ostr,Sstr)
console.log(result)
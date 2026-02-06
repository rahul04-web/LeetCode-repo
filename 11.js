//write a js functoin that check whether the gove number is palindrome or not

function isPalindrome(m){
    let arr = m.toString()
    let rev=arr.split("").reverse().join("")
    if(arr===rev){
        return "The given number is palindrome"
    }else{
        return "The given number is not palindrome"
    }
    
    
}

const result=isPalindrome(565)
console.log(result)
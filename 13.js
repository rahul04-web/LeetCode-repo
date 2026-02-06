// find the reverse of a given number , If the given number is negative the reversed number also be negative 

function reverseNum(number){
    let newArr=number.toString().split("")
    let revArr = newArr.reverse().join('')
    let res =parseInt(revArr) * Math.sign(number)
   return res
}

const result = reverseNum(-869)
console.log(result)

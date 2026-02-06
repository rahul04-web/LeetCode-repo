//write a js fn remove duplicate char from a string

//input : "programing"
//op : "progamin"

function removeDuplicate(str){
    const set= new Set(str)
    const newArr = [...set].join("")
    return newArr        
}

const result=removeDuplicate("Programing")
console.log(result);


//write a person class with a Name Age property and a greet method thar print the neccessary output

class person{
    constructor(fname , age){
        this.fname = fname,
        this.age = age
    }
    greet(){
        console.log(`Hello, my name is ${this.fname} and age is ${this.age}`)
    }
}

let obj1 =new person("Rahul",56)
obj1.greet()
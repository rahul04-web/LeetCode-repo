//write a class to manage user registration and ensure the unique 
// validate of username

//A method should logs 
// >> User name already exists . Please choose a diff username (if registered)
//user regisred successfully (if not registered)

class userRegisteration{
    constructor(){
        this.users=[]
    }
    register(username, password){
        let userExists=this.users.some((ele)=>ele.username ===username )
        if(userExists){
            console.log(`User name already exists. Please choose a diff username`)
        }else{
            this.users.push({username,password})
            console.log(`User registered successfully`)
        }
    }
    show(){
        console.log(this.users)
    }
}
let system= new userRegisteration()
console.log(system)

system.register("Osho","69")
system.register("Pluto","96")

system.show()
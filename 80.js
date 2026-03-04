// write a js fn to check if all the value of an object are 
//numeric values

//inp : { a : 1 , b : "2" , c : 3}
//op : false

function isNumeric(obj){
    for(const value of Object.values(obj)){
        if(typeof value !== "number" || isNaN(value)){
            console.log(false) 
            return
        }
    }
    console.log(true)
}
isNumeric({ a : 1 , b : "2" , c : 3}) 
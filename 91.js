//write a function to find the length of the longest string value in a obj

function findLogngestStringLength(obj){
    let value = Object.values(obj)
    let leng=0
    let str = ""
    for(const val of value){
        if(typeof val === "string" && val.length > leng){
            leng = val.length
            str = val
        }
        
    }
console.log(leng)
}
findLogngestStringLength({a:"dhd",b:"dhfsdjkh",c:"dherdshksh=uis",k:"dsyeu"})
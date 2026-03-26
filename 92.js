//write a fn to find the logest string value in an obj

function longestStringValue(obj){
    let value = Object.values(obj)
    let leng =0
    let str=""
    for(const val of value){
        if( typeof val ==="string" && val.length > leng){
            leng = val.length
            str=val
        }
    }
return str
}
console.log(longestStringValue({a:"dhd",b:"dhfsdjkh",c:"dherdshksh=uis",k:"dsyeu"}))
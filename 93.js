//write a js fn that takes an obj and converts it into a query String format

function quryString(obj){
    let objKeys = Object.keys(obj)

    let query = objKeys.map((ele)=>`${encodeURIComponent(ele)}=${encodeURIComponent(obj[ele])}`)
    console.log(query)
    
    let queryString = query.join("&")
    console.log(queryString)
   
}
quryString({a:"dhd",b:"dhfsdjkh",c:"dherdshksh=uis",k:"dsyeu"})
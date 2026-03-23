//write a js fn to remove duplicate value from an obj

   function removeDuplicates(obj){
        let uniqueVal=new Set()
        let result={}
    for(const [keys,value] of Object.entries(obj)){
        if(!uniqueVal.has(value)){
            uniqueVal.add(value)
            result[keys]=value
        }
    }
    console.log(result) 
   }
   removeDuplicates({a:1,b:3,c:4,d:5,e:3})

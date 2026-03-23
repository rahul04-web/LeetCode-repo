//write a js fn to merge the two obj and add same keys values

function mergeAndSum(obj1, obj2){
    let result = {...obj1}
    
    for(const keys in obj2){
        result[keys]=(result[keys] || 0 ) + obj2[keys]
    }
    console.log(result)
}
mergeAndSum({a : 1, b : 3, d : 5 },
    {a : 1, b : 3, c : 5 }
)
//write  table take input n from user

function tablr(num,n){
    if(n <= 0){
        return null
    }
    const store=[]
    for(let i = 1; i<=n;i++){
        store.push(num * i)
        
    }
    return store.join(" ")
}
const result=tablr(9,0)
console.log(result)
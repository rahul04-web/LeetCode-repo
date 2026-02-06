//write a js function to find the factor of given number

const findFactor=(n)=>{
    let factor=[]
    for(let i = 1; i <= n; i++){
        if(n%i==0){
            
            factor.push(i)
        }
    }
    console.log(`factor of ${n}:`,...factor)
}
findFactor(12)
findFactor(45856)


//write a js function that a n and prints its miltiplication table from 1 to 10

function table(n){
    let multi=[];
    for(let i = 1; i <= 10; i++){
        multi.push(n*i)
    }
    return multi
}
const result=(table(55))
 console.log(result)

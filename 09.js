//Fiboobnacii series 
//starting and output a specified number of terms

function fiboobnacii(start1 , start2, no){
    let series=[];
    let first= start1 , second = start2,next;
    for (let i = 0; i < no; i++) {
        series.push(first)
        next  = first + second;
        first=second
        second=next
        
    }
    return series
}
const result=fiboobnacii(56,100,6)
console.log(`fiboobnacii series is : `,result);

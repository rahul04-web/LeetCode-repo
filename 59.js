//swap number using temp variable

function swapUseTemp(a,b){
    console.log(a,b)
    let temp = a;
    a=b;
    b=temp
    console.log(a,b)
}
swapUseTemp(4,9)
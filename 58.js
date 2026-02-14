//write a js fn to swap the values of two variables using destructring assignment

//inp : a=5, b=10
//op : a=10 b=5

function swappedVal(a,b){
    console.log(a,b);
    [a,b]=[b,a] //destructring
    console.log(a,b)
}
swappedVal(8,9)

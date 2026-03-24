// write a js fn to return an array of obj containing 
// both key and value paires from an obj

// inp : {a:1 , b:3 , c:5}
//op : [
//   { key: 'a', value: 1 },
//   { key: 'b', value: 3 },
//   { key: 'c', value: 5 }
//   { key: 'c', value: 5 }
// ]

function arrayOfObj(obj){
    let make= Object.entries(obj)
    console.log(make)
    //Array of Objects
    const result = make.map((ele)=> ({key:ele[0],value:ele[1]}))
    console.log(result)
    //Destructuring
    const result2=make.map(([key,value])=>({key,value}))
    console.log(result2)
}
arrayOfObj({a:1 , b:3 , c:5})
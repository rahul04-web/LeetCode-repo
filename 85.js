//write a js fn to colues unt how many times each value appeare in object


function countValueOccurence(obj){
let count = {}
for(const value of Object.values(obj)){
    count[value]=(count[value] || 0)+1
} 
console.log(count)

}
countValueOccurence({a:2,b:5,c:2,d:6,e:5})
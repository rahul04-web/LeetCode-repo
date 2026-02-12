//write a js fn to find the common element betn the given array

//in :Array 1 [1,3,2,4,53,5]
//      Array 2 [1,3,646,4,46,44]

//op : [ 1, 3, 4 ]

function findSameEleArray(arr1 , arr2){

    const check = arr1.filter((e)=>arr2.includes(e))
    
    console.log(check)

}
findSameEleArray([1,3,2,4,53,5] , [1,3,646,4,46,44])
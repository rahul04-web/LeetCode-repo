//write a js fn that convert a string from CamleCase to SnakeCase
//input : "myVariableName"
//output : "my_variable_name"

function toSnakeCase(str){
    const nnew = str.replace(/([A-Z])/g,"_$1").toLowerCase()
    console.log(nnew)
}
toSnakeCase("myVariableName")
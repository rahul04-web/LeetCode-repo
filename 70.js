//write a js fn to replace the middke element of a string with `*`
//if string length is even , replace the two middle ele with `*`

//inp : hello
// op : he*lo

function replaceMidOfString(str) {
  if(str==""){
    return "The String is empty"
  }
  let arr = str.split("");
  let num = arr.length / 2;

  if (arr.length % 2 === 0) {
    ((arr[num] = "*"), (arr[num - 1] = "*"));
  } else {
    let newNum = Math.floor(num);
    arr[newNum] = "*";
  }
  let newStr = arr.join("");
  console.log(newStr);
}
replaceMidOfString("worjdss");
replaceMidOfString("");


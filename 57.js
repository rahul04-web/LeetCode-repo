//write a js fn encode a string based on char frequecy

//inp : "aaabbc"
//op: a3b2c1

function encodeString(str) {
  const arr = str.split("");
  let obj = {};
  let resultStr = "";
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  for (let key in obj) {
    resultStr += key + obj[key];
  }
  return resultStr;
}
const result = encodeString("aaabbc");
console.log(result);

//check whether the string is anagram or not

const isAnagram = (str1, str2) => {
  str1 = str1.toLowerCase().replace(/\s/g, "").split("").sort().join();
  str2 = str2.toLowerCase().replace(/\s/g, "").split("").sort().join();
  if (str1 == str2) {
    return "it is an anagram";
  } else {
    return "it is not anagram";
  }
};
let str1 = "gum";
let str2 = "mug";
console.log(isAnagram(str1, str2));

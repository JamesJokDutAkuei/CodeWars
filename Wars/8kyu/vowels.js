// Return an array of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function vowelCount(str){
  let arr = ["a","e","i","o","u"];
  strgg = str.split("").filter(strg => arr.includes(strg));
  return strgg;
}
let arry = "i am james jok";
console.log(vowelCount(arry));

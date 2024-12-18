// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1
function testCase(f, n){
  
  if ((!(/[a-zA-Z]/).test(f)) || (!(/[a-zA-Z]/).test(n))){
    return -1
    
  } else if (((/[a-z]/).test(f)) && ((/[a-z]/).test(n))||((/[A-Z]/).test(f)) && ((/[A-Z]/).test(n))){
    return 1
    
  } //else if (((/[a-z]/).test(f)) && ((/[A-Z]/).test(n)) || ((/[A-//Z]/).test(f)) && ((/[a-z]/).test(n))){
    return 0
}
console.log(testCase("\t", ""));
console.log(testCase("a", "m"));
console.log(testCase("B", "C"));
console.log(testCase("A", "m"));
console.log(testCase("a", "M"));
console.log(testCase("B", "c"));


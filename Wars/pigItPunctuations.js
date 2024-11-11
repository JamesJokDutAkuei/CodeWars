/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

 Examples
 pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
  // Split the sentence into an array of words based on spaces
  return str.split(" ")
    .map(word => {  
      // Check if the word contains only letters (no punctuation)
      if (/^[a-zA-Z]+$/.test(word)) {
        // If true, move the first letter to the end and add "ay"
        // word.slice(1) takes everything except the first letter
        // word[0] gives the first letter
        return word.slice(1) + word[0] + "ay";
      } else {
        // If the word contains punctuation, return it unchanged
        return word;
      }
    })
    // Join the transformed words back into a single sentence with spaces
    .join(" ");
}

// Example usage
console.log(pigIt("Pig latin is cool")); // Output: "igPay atinlay siay oolcay"
console.log(pigIt("Hello world !"));     // Output: "elloHay orldway !"


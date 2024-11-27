/* This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
 */


function removeFirstAndLast(str) {
    // If the string is empty or has only 1 or 2 elements, return NULL
    if (!str || str.split(",").length <= 2) {
        return null;
    }
    
    // Split the string into an array by commas
    let sequences = str.split(",");
    
    // Remove the first and last elements, then join the rest with spaces
    return sequences.slice(1, -1).join(" ");
}

// Examples
console.log(removeFirstAndLast("1,2,3"));      // Output: "2"
console.log(removeFirstAndLast("1,2,3,4"));    // Output: "2 3"
console.log(removeFirstAndLast("1,2,3,4,5"));  // Output: "2 3 4"
console.log(removeFirstAndLast(""));           // Output: null
console.log(removeFirstAndLast("1"));          // Output: null
console.log(removeFirstAndLast("1,2"));        // Output: null


/* Description:
write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers. */

Way 1:

function stringy(size) {
  // Initialize an empty array to store the result
  let result = [];
  
  // Loop from 1 to the specified size
  for (let i = 1; i <= size; ++i) {
    // If the current index is even, push '0', otherwise push '1'
    (i % 2 === 0) ? result.push("0") : result.push("1");
  }
  
  // Join the array elements into a single string and return the result
  return result.join('');
}

// Test the function
console.log(stringy(3)); // Output: "101"


Way 2:

function stringy(size) {
  // Initialize an empty string to build the result
  var str = '';

  // Loop from 1 to the specified size
  for (var i = 1; i <= size; i++) {
    // Append '1' for odd indices and '0' for even indices
    str += i % 2;
  }

  // Return the final string
  return str;
}

// Test the function
console.log(stringy(3)); // Output: "101"


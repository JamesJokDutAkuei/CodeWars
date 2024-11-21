/*
 
 Multiply the adjacent digits which are not separated by a '-' or a '+' in a string, then do the sum.

For example:

"53+5"    ->   20, which is 5 * 3 + 5
"266-66"  ->   36, which is 2 * 6 * 6 - 6 * 6
"555"     ->  125, which is 5 * 5 * 5

 */

function evaluateExpression(input) {
  let total = 0; // To store the final result
  let currentProduct = 1; // To calculate the product of adjacent digits
  let currentSign = 1; // To track the current sign (+1 for positive, -1 for negative)

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (!isNaN(char)) {
      // If the character is a digit, multiply it into the current product
      currentProduct *= Number(char);
    } else if (char === '+' || char === '-') {
      // If the character is an operator:
      total += currentSign * currentProduct; // Add the current product to the total
      currentProduct = 1; // Reset the product for the next group
      currentSign = char === '+' ? 1 : -1; // Update the sign
    }
  }

  // After the loop, add the last product to the total
  total += currentSign * currentProduct;

  return total;
}

// Examples
console.log(evaluateExpression("53+5"));    // Output: 20
console.log(evaluateExpression("266-66"));  // Output: 36
console.log(evaluateExpression("555"));     // Output: 125


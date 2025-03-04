const sumTwoLowestNumbers = (arr) => {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);
  
  // Return the sum of the first two elements
  return arr[0] + arr[1];
};

// Example usage:
console.log(sumTwoLowestNumbers([19, 5, 42, 2, 77])); // 7
console.log(sumTwoLowestNumbers([10, 343445353, 3453445, 3453545353453])); // 3453455

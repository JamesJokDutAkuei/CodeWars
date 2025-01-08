/* #Task Given a sorted array of integer numbers A and another integer number sum, write a function that returns true if there are two (distinct) numbers in A that add up to sum. Return false otherwise.

#Input

A: The array is guaranteed to be sorted and has at least two elements. All elements are integers.
sum: An integer.
#Example

A = [1,2,3,4], sum = 7 returns true, since 3+4=7.
A = [-1,2,7,15], sum = 12 returns false, since any combination of two integers in the array doesn't add up to 12.
A = [1,3,3], sum = 2 returns false. You cannot use 1 twice.
#Notes

Some arrays will have many elements (>100000). Therefore, please optimize your code.
 */

function sumEqual(A, target) {
  // Initialize two pointers:
  // 'left' starts at the beginning of the array
  let left = 0;
  // 'right' starts at the end of the array
  let right = A.length - 1;

  // Loop until the two pointers meet
  while (left < right) {
    // Calculate the sum of the elements at the 'left' and 'right' pointers
    const currentSum = A[left] + A[right];

    // If the sum matches the target, return true
    if (currentSum === target) {
      return true;
    }
    // If the sum is less than the target, move the 'left' pointer to the right
    else if (currentSum < target) {
      left++;
    }
    // If the sum is greater than the target, move the 'right' pointer to the left
    else {
      right--;
    }
  }

  // If no pair is found that sums to the target, return false
  return false;
}

// Test the function with an example
console.log(sumEqual([1, 2, 3, 4], 7)); // Output: true


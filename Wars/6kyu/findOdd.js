/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */

function ints(arr){
  const count = {};

  // Count the frequency of each number
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  // Find the number with an odd frequency
  for (let num in count) {
    if (count[num] % 2 !== 0) {
      return parseInt(num);  // Return the number that appears an odd number of times
    }
  }
}
const arry = [5,1,2,2,3,2,3,1,2,2,2,5,5];
console.log(ints(arry));

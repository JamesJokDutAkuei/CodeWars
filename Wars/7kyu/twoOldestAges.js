/* The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10] */


// Way 1


function twoOldestAges(ages) {
  // Sort the array in ascending order
  let sortedAges = ages.sort((a, b) => a - b);

  // Get the two largest numbers from the sorted array
  let secondOldest = sortedAges[sortedAges.length - 2];
  let oldest = sortedAges[sortedAges.length - 1];

  // Return them in an array as [second oldest, oldest]
  return [secondOldest, oldest];
}

// Example usage
console.log(twoOldestAges([1, 2, 10, 8]));      // Output: [8, 10]
console.log(twoOldestAges([1, 5, 87, 45, 8, 8])); // Output: [45, 87]
console.log(twoOldestAges([1, 3, 10, 0]));        // Output: [3, 10]


// Way 2


// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
   return ages.slice(0).sort((a, b) => a - b).slice(-2);
}

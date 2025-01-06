/* Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]] */


function keysAndValues(data){
  // Extract keys and values from the object
  const keys = Object.keys(data);
  const values = Object.values(data);
  // Return as separate arrays
  return [keys, values];
}

console.log(keysAndValues({a: 1, b: 2, c: 3})); // [['a', 'b', 'c'], [1, 2, 3]]

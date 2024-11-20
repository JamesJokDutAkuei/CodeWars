/* Task
Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
Notes
"flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself. */

// Way 1

function flickSwitch(items) {
    // Start with true as the initial state
    let currentState = true;
    const result = [];

    // Iterate through the array
    for (const item of items) {
        // Toggle the state if the item is 'flick'
        if (item === 'flick') {
            currentState = !currentState;
        }
        // Append the current state to the result array
        result.push(currentState);
    }

    return result;
}

// Examples
console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']));
// ➞ [true, false, false, false]

console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']));
// ➞ [false, false, false, false]

console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']));
// ➞ [true, true, false, false, true]


// Way 2

function flickSwitch(arr){
  let flag = true
  return arr.map(e => e === 'flick' ? flag = !flag : flag)
}

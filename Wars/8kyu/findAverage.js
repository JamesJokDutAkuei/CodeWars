```bash
Find Mean
Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
```


//Way 1

function findAverage(nums) {
  let result=0;
  for (let i = 0; i < nums.length; ++i){
    result += nums[i];
  }
  return (result / nums.length);
}
var arr = [1,3,10,0.5, 0.5]
console.log(findAverage(arr))

//Way 2
let j = arr.reduce((num, acc) => num + acc)/arr.length;
console.log(j);

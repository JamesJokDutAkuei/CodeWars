// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arry) {
    const nonz = arry.filter(item => item !== 0);
    const zcount = arry.length - nonz.length;
    return [...nonz, ...Array(zcount).fill(0)];
};
let arr = [false,1,0,1,0,1,3,"a"];
console.log(moveZeros(arr)); //Output: [false, 1, 1, 1, 3, "a"]

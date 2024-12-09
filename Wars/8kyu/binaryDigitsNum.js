// Description:
// Given a number n, find the number of trailing zeros in its binary representation.

// Examples:
// 4  ->  2, because 4 is represented as 100
// 5  ->  0, because 5 is represented as 101

// Limits:
// 0 < n <= 10^4


function trailingZeros(n) {
    binaryDigit=''

    while(n>0){
        binaryDigit = (n%2) + binaryDigit
        n = Math.floor(n/2)
    }
    
    let toStr = binaryDigit.toString()
    toStr = toStr.match(/0+$/)
    toStr = toStr ? toStr[0].length : 0;
    return parseInt(toStr)

  }
  console.log(trailingZeros(32))

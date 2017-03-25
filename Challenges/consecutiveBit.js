/*https://codefights.com/challenge/fW66dxr49QERhv8KK
Given an integer num, write an algorithm that determines if the given number has consecutive 1s in its binary representation.

Example

For num = 3, the output should be
consecutiveBit(num) = true.

310 is 112, which contains a pair of consecutive 1s.

For num = 21, the output should be
consecutiveBit(num) = false.

2110 is 101012, which contains no consecutive 1s.*/

function consecutiveBit(num) {
    return (num >>> 0).toString(2).indexOf("11")!=-1;
}

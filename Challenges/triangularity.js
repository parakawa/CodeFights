/*
https://codefights.com/challenge/xunq4T96b3fY54Wif
You have an array of integers, and each integer denotes the length of a segment. Determine whether it is possible to pick three segments and construct a triangle out of them.

It is possible to construct a triangle if the combined length of the two shortest segments is greater than the length of the longest segment.

Example

For segmentsLength = [1, 2, 3, 4], the output should be
triangularity(segmentsLength) = true.

The segments of lengths 2, 3, and 4 can be used to form a triangle.

For segmentsLength = [1, 2, 3], the output should be
triangularity(segmentsLength) = false.

The given three segments don't form a triangle.
*/

function triangularity(segmentsLength) {
    var size=segmentsLength.length;
    if(size<3) return false;
    segmentsLength.sort(function(a,b){return a-b});
    if(segmentsLength[size-3]+segmentsLength[size-2]>segmentsLength[size-1]) 
        return true;
    return triangularity(segmentsLength.slice(0,-1));
}
/*https://codefights.com/interview/t8iNoBtDf5XSiwHiF
You are supposed to label a bunch of boxes with numbers from 0 to n, and all the labels are stored in the array arr. Unfortunately one of the labels is missing. Your task is to find it.

Example

For arr = [3, 1, 0], the output should be
missingNumber(arr) = 2.*/

function missingNumber(arr) {
    var n=arr.length,sumArr=0;
    for(var i=0;i<n;i++)
        sumArr+=arr[i];
    return n*(n+1)/2-sumArr;
}

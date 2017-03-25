/*https://codefights.com/interview/xfpK5NtkLaoYEPLCT
Reverse the digits of the given integer.

Example

For x = 12345, the output should be
reverseInteger(x) = 54321;
For x = -4243, the output should be
reverseInteger(x) = -3424.*/

function reverseInteger(x) {
    if(x>0){
    var y=""+x;
    return 1*y.split("").reverse().join("");
    }
    else{
    var y=""+(-1*x);
    return -1*y.split("").reverse().join("");  
    }
        
}
/*https://codefights.com/interview/jMByebMMaF8nLgf8s
Determine whether the given number n is a power of two.

Example

For n = 64, the output should be
isPowerOfTwo2(n) = true;

For n = 5, the output should be
isPowerOfTwo2(n) = false.
*/

function isPowerOfTwo2(n) {
    while(n%2==0)
        n=n/2;
    return n==1;
}

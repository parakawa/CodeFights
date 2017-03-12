//https://codefights.com/challenge/2ST7pD433eT8SXNyM

/*
A number is considered to be boring if:

it's a positive integer;
it's not prime;
it does not belong to the Fibonacci sequence.
Given a number k, find the kth boring number when counting up from 1.

Example

For k = 1, the output should be
kthBoring(k) = 4.

The numbers 1, 2 and 3 belong to the Fibonacci sequence, so they are not boring. The number 4 is not prime and does not belong to the Fibonacci sequence, so it's the 1st boring number.

For k = 2, the output should be
kthBoring(k) = 6.

The number 5 is prime, so it's not boring, meaning that the 2nd boring number is 6.
*/

function kthBoring(k) {
    var count=0,n=1;
    while(count<k){
       if(isPrime(n) || isFibonacci(n)){
           n++;
       } else{
           count++;
           n++;
       }
    }
    return n-1;
}

function isPrime(n){
    for(var i=2;i<Math.sqrt(n)+1;i++)
        if(n%i==0)
            return false;
    return true;
}

function isFibonacci(n){
   var a=[];
    a[0]=1;a[1]=1;
   var i=1;
   while(n>=a[i]){ 
       i++;
       a[i]=a[i-1]+a[i-2];
    }
   return n==a[i] || n==a[i-1];
}
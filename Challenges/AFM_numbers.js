/*
https://codefights.com/challenge/T6G5FmTpmM6rfd8id
Reverse Challenge

1-> [0,1]
2-> [1,2]
3-> [2,5]
4-> [5,10]
5-> [10,21]
6-> [21,42]
7-> [42,85]
8-> [85,170]
9-> [170,341]
14-> [5461,10922]
*/

function AFM_numbers(bits) {
    if(bits==1) return [0,1];
    var a=AFM_numbers(bits-1)[1];
    if(bits%2==0)  return [a,2*a]
    else return [a,2*a+1];
}
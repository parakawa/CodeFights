//https://codefights.com/challenge/o6Jz5K69quZeuAckn

function findNumber(n) {
    if(n==0) return 0;
    else{
    var n1=2*n+(n-2);
    var n2=2*n+(n-2)+1;
    var n3=2*n+(n-2)+2;
    return parseInt(""+n1+n2+n3);
    }
}
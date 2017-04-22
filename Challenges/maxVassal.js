/*
https://codefights.com/challenge/kfNdzuQtQZ23MPDZx
*/

function maxVassal(num) {
    for(i=Math.floor(Math.pow(num,1/3));i>=0;i--)
        for(var j=2;j<=i;j++)
            if(num%j==0 && i%j==0 && i*i*i<num)
                return i;
    return -1;
}
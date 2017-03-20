/*https://codefights.com/challenge/MTgvXpcmjxQzkqpek
Given the first 11 digits of a GTIN-12 barcode as an integer (i.e. without leading zeros), determine the last number by calculating the value of the check digit.

Example

For a = 29104150021, the output should be
checksum_part1(a) = 9.

The digit sum can be calculated as follows, using the information in the link above:

You know that you need to multiply the digit at N1 by 3, the digit at N2 by 1, and so on, then add these numbers together: 2 * 3 + 9 * 1 + 1 * 3 + 0 * 1 + 4 * 3 + 1 * 1 + 5 * 3 + 0 * 1 + 0 * 3 + 2 * 1 + 1 * 3 = 51

Then, you need to subtract that sum from the nearest equal or higher multiple of ten: 60 - 51 = 9.*/

function checksum_part1(barcode) {
    barcode=""+barcode;
    var sum=0;
    if(barcode.length%2!=0){
    for(var i=0;i<barcode.length;i++)
        if(i%2==0) sum+=parseInt(barcode[i])*3;
        else sum+=parseInt(barcode[i]);
    return sum%10==0? 0:10-sum%10;
    }
    else{
    for(var i=0;i<barcode.length;i++)
        if(i%2==0) sum+=parseInt(barcode[i]);
        else sum+=parseInt(barcode[i])*3;
    return sum%10==0? 0:10-sum%10;
    }
}
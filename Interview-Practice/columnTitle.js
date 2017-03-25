/*https://codefights.com/interview/XPZ2BjPnFiwpKBurb

Spreadsheet software uses a consistent naming pattern for columns, in which the first column is named A, the second column is named B, the 27th column is named AA, the 28th is named AB, and so on.
Given a positive integer number, return the corresponding column title as it would appear in a spreadsheet.

Example

For number = 27, the output should be
columnTitle(number) = "AA";
For number = 2, the output should be
columnTitle(number) = "B".*/

function columnTitle(number) {
    var result="",car;
    while(number>0){
        car=number%26;
        if(car==0) {
            number=parseInt(number/26)-1;
            result+=String.fromCharCode(90);
        }
        
        else{
            number=parseInt(number/26);
            result+=String.fromCharCode(car+64);
        } 
    }
    return result.split("").reverse().join("");
}

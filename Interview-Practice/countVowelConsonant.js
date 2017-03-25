/*https://codefights.com/interview/gxG6mKetbu3p7Ekim

You are given a string s that consists of only lowercase English letters. If vowels ('a', 'e', 'i', 'o', and 'u') are given a value of 1 and consonants are given a value of 2, return the sum of all of the letters in the input string.

Example

For s = "a", the output should be
countVowelConsonant(s) = 1;

For s = "abcde", the output should be
countVowelConsonant(s) = 8.

The letters in s, converted to 1s and 2s and added together as described above: 1 + 2 + 2 + 2 + 1 = 8.*/

function countVowelConsonant(s) {
    var res=0;
    for(var i=0;i<s.length;i++)
        if(s[i]=="a" || s[i]=="e" || s[i]=="i" || s[i]=="o" || s[i]=="u")
            res+=1;
        else res+=2;
    return res;
}
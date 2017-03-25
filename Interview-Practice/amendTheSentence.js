/*https://codefights.com/interview/Qut6cbvXDJHPb3AzT

You have been given a string s, which is supposed to be a sentence. However, someone forgot to put spaces between the different words, and for some reason they capitalized the first letter of every word. Return the sentence after making the following amendments:

Put a single space between the words.
Convert the uppercase letters to lowercase.
Example

For s = "CodefightsIsAwesome", the output should be
amendTheSentence(s) = "codefights is awesome";
For s = "Hello", the output should be
amendTheSentence(s) = "hello".*/

function amendTheSentence(s) {
    var result=s[0];
    for(var i=1;i<s.length;i++)
        s[i]>="A" && s[i]<="Z"? result+=" "+s[i]: result+=s[i];
    return result.toLowerCase();
}

//https://codefights.com/challenge/jzs6k2FedHaDfCWtv

function reverseChallenge(s) {
   sn=s.split("").reverse().join("");
    var res="";
    for(var i=0;i<sn.length;i++)
        if(s[i]==" ") res+=""+getLetter(sn[i]);
        else res+=getLetter(sn[i]);
    return sep(s,res);
}

function getLetter(l){
    if(l==" ") return "";
    var abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    var i=l.charCodeAt()-"a".charCodeAt();
    return abc[25-i];
}

function sep(p,s){
    var ans="",b=0;
    for(var i=0;i<p.length;i++)
        if(p[i]==" ") {ans+=" ";b++}
        else ans+=s[i-b];
    return ans;
}
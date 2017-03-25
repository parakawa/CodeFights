/*https://codefights.com/interview/ypWMG9KExz8FbGkYB

Try to solve this challenge with linear complexity and using O(1) additional memory, since this is what you would be asked to do during a real interview.

You have an array a containing 2 * n + 2 positive numbers, in which n numbers occur twice and two other numbers occur only once and are distinct. Find the two distinct numbers and return them in ascending order.

Example

For a = [1, 3, 5, 6, 1, 4, 3, 6], the output should be
findTheNumbers(a) = [4, 5];
For a = [4, 5, 6, 5, 3, 4], the output should be
findTheNumbers(a) = [3, 6].*/

function findTheNumbers(a) {
    var result=[],obj={};
    for(var i=0;i<a.length;i++)
        if(obj.hasOwnProperty(a[i]))
            obj[a[i]]++;
        else obj[a[i]]=1;
    for(var i in obj)
        if(obj[i]==1){
            result.push(parseInt(i));
        }
    return result.sort();
}



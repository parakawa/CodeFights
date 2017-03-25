/*https://codefights.com/interview/7xqHvuKXT2oBJ26iq
You are given an array of integers in which every element appears twice, except for one. Find the element that only appears one time. Your solution should have a linear runtime complexity (O(n)). Try to implement it without using extra memory.

Example

For nums = [2, 2, 1], the output should be
singleNumber(nums) = 1.*/

function singleNumber(nums) {
    var obj={}
    for(var i=0;i<nums.length;i++)
        if(obj.hasOwnProperty(nums[i]))
            obj[nums[i]]++;
        else obj[nums[i]]=1;
    for(var a in obj)
        if(obj[a]==1) return parseInt(a);
    
}

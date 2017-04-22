/*
https://codefights.com/challenge/x8HkBKBW8PxKApXPs
Spring has sprung in the Northern Hemisphere!

As you walk through the park, you notice that the clover has started growing as well. You lean down and pick a clover that has a ridiculous number of leaves.

You believe that any clover that has a number of leaves divisible by 4 is lucky. Determine if the clover you found is lucky.

Example:

For leaves = "2075134854075614008885732002623615",
the output should be
crazyClover(leaves) = false.

For leaves = "32565527543186766526240463003010854254680",
the output should be
crazyClover(leaves) = true.*/

function crazyClover(leaves) {
    return leaves.slice(-2)%4<1
}
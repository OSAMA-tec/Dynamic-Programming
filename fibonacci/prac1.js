/*
Given a positive integer n, find the minimum number of coins needed to make a change for n 
units using dynamic programming with memoization. 
You have an unlimited supply of coins with denominations 1, 5, and 10.
*/


const checkChange=(n,values=[],memo={})=>{
    if(n in memo)return memo[n];
    const obj=[10,5,1];
    if(n<=0)return values;

    for(let i=0;i<obj.length;i++){
        if(n>=obj[i]){
            values.push(i);
            memo[n]=checkChange(n-obj[i],values,memo);
            return memo[n];
        }
    }
    return values;
}

console.log(checkChange(18));
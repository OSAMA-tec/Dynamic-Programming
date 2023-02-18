

//this is basic funtion which is use to calculate fib number 
//there is an issue 
//-->if we try to increase the n number then it will increase the time complixity of program.

/*
const fib = (n) => {
    if (n <= 2) return 1;
    console.log(n);
    return fib(n - 1) + fib(n - 2);
};
console.log(fib(7));
*/
//---------------------------------------------------------------------//
//TO fix this issue 
// We will implement memoization in which we store the subproblems in something to remove dublicaton.
//i will use javascript object in Javascript

const fib = (n,memo={}) => {
    if (n in memo)return memo[n];
    if (n <= 2) return 1;
    // console.log(n);
    memo[n]= fib(n - 1,memo) + fib(n - 2,memo);
    return memo[n];
};
console.log(fib(6));
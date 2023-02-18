/*you are given a grid with dimensions m x n. You start at the top-left corner and your goal is to reach the bottom-right corner. You may only move down or right.
In how many ways can you travel to the goal on this grid?
For example, if the dimensions of the grid are 2 x 3, then there are three ways to travel from the top-left to the bottom-right:
Right, Right, Down
Right, Down, Right
Down, Right, Right
Your task is to write a function grid_traveler(m, n) that calculates the number of ways to travel to the goal on a grid with dimensions m x n. The function should return an integer.*/




const grid_traveler = (m, n, memo = {}) => {
    let key=m+" "+n;
    if(key in memo)return memo[key];
    if (m === 1 && n === 1) return 1;   //base condition
    if (m === 0 || n === 0) return 0;   //base condition
    memo[key]=grid_traveler(m - 1, n,memo) + grid_traveler(m, n - 1,memo);
    return memo[key];
}

console.log(grid_traveler(42, 23));
console.log(grid_traveler(4, 3));
/*Suppose you are given a rectangular grid of size m x n with some cells blocked, represented by the symbol X. You can only travel through empty cells. Your goal is to travel from the top-left corner to the bottom-right corner of the grid. How many unique paths can you take?

For example, if the grid looks like this:

S O O
O X O
O X E
where S represents the starting point, E represents the endpoint, and X represents a blocked cell, then there are two unique paths from S to E:

Right, Down, Down, Right
Down, Right, Down, Right
Write a function grid_traveler_with_obstacles(grid) that takes in a two-dimensional array grid representing the rectangular grid, and returns the number of unique paths from the top-left corner to the bottom-right corner. You may assume that the dimensions of the grid are positive integers and that grid[0][0] is the starting point and grid[m-1][n-1] is the endpoint. */
const grid_traveler_with_obstacles = (grid, memo = {}) => {
    const m = grid.length;
    const n = grid[0].length;
    if (m === 1 && n === 1) return 1;   // base condition
    if (grid[0][0] === "X" || grid[m - 1][n - 1] === "X") return 0;  // corner cells are blocked

    const key = `${m},${n}`;
    if (key in memo) return memo[key];

    let count = 0;
    if (m > 1 && grid[1][0] !== "X") {
        count += grid_traveler_with_obstacles(grid.slice(1), memo);
    }
    if (n > 1 && grid[0][1] !== "X") {
        count += grid_traveler_with_obstacles(grid.map(row => row.slice(1)), memo);
    }

    memo[key] = count;
    return count;
};

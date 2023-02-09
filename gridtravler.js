// const gridTraveler=(m,n)=>{
//     if(m===1&&n===1)return 1;
//     if(m===0||n===0)return 0;
//     return gridTraveler(m-1,n)+gridTraveler(m,n-1);
// }

// console.log(gridTraveler(2,3));
// console.log(gridTraveler(3,3));
// console.log(gridTraveler(4,4));

//Uper code become slow when putting greater value so
//memoization adding upper code
const gridTraveler = (m, n, memo = {}) => {
    const key = m + ',' + n;
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    if (key in memo) return memo[key];
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
}

console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(4, 4));
console.log(gridTraveler(18, 18));
console.log(gridTraveler(180, 180));

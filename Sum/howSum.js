const canSum = (targetSum, numbers,memo={}) => {
    if (targetSum === 0) return [];
    if(targetSum in memo)return memo[targetSum];
    if (targetSum < 0) return null;
    for (let num of numbers) {
        const remainder = targetSum - num;
        remainderResult=canSum(remainder, numbers,memo);
        if (remainderResult!==null) {
            memo[targetSum]=remainderResult;
            return [...remainderResult,num];
        }
        
    }
    memo[targetSum]=null;
    return null;
}

console.log(canSum(7, [2, 4]));
console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3,4,7]));
console.log(canSum(5, [2, 3]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7,14]));
console.log(canSum(7, [2,3,7,14]));
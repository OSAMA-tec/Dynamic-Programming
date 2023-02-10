//Wrtie a function "canSum(targetSum,numbers)" that takes in a targetSum and an array of numbers as arguments

//The function should return boolean value indicating it's is possible or not

const canSum = (targetSum, numbers,memo={}) => {
    if (targetSum === 0) return true;
    if(targetSum in memo)return memo[targetSum];
    if (targetSum < 0) return false;
    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers,memo) === true) {
            memo[targetSum]=true;
            return true;
        }
        
    }
    memo[targetSum]=false;
    return false;
}

console.log(canSum(7, [2, 4]));
console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3,4,7]));
console.log(canSum(5, [2, 3]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7,14]));
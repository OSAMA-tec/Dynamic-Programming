/*Suppose you are given a list of positive integers, and you want to determine the length of the longest increasing subsequence (LIS) in the list. A subsequence is a sequence that can be derived from the original sequence by deleting some or no elements without changing the order of the remaining elements. An increasing subsequence is a subsequence in which the elements are in strictly increasing order.

For example, suppose you are given the list [3, 4, -1, 0, 6, 2, 3]. The longest increasing subsequence in this list is [3, 4, 6], which has length 3. Note that there are other increasing subsequences in the list, but they are not as long.

Write a function longest_increasing_subsequence(arr) that takes in a list of positive integers arr and returns the length of the longest increasing subsequence.*/

function longest_increasing_subsequence(arr) {
    const n = arr.length;
    const dp = new Array(n).fill(1);
  
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }
  
    return Math.max(...dp);
  }
  

console.log(longest_increasing_subsequence([3, 4, -1, 0, 6, 2, 3]));
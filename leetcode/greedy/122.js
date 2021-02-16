// 贪心
// 时间复杂度：O(n)O(n)，其中 nn 为数组的长度。我们只需要遍历一次数组即可。
// 空间复杂度：O(1)O(1)。只需要常数空间存放若干变量。
var maxProfit = function(prices) {
    let ans = 0;
    let n = prices.length;
    for (let i = 1; i < n; ++i) {
        ans += Math.max(0, prices[i] - prices[i - 1]);
    }
    return ans;
};

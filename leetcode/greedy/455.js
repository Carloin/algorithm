// 排序 + 贪心算法
// 时间复杂度：O(m \log m + n \log n)O(mlogm+nlogn)
// 空间复杂度：O(\log m + \log n)O(logm+logn)
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    const numOfChildren = g.length, numOfCookies = s.length;
    let count = 0;
    for (let i = 0, j = 0; i < numOfChildren && j < numOfCookies; i++, j++) {
        while (j < numOfCookies && g[i] > s[j]) {
            j++;
        }
        if (j < numOfCookies) {
            count++;
        }
    }
    return count;
};


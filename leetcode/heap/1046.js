// sort 递归边界 取反 即 迭代条件：数组长度 > 1
var lastStoneWeight = function(stones) {
    sort(stones)
    while (stones.length > 1) {
        const d = stones.pop() - stones.pop()
        if (d) { 
            stones.push(d)
            sort(stones)
        } 
    }
    return stones.length ? stones[0] : 0
};
var sort = stones => stones.sort((a, b) => a - b)
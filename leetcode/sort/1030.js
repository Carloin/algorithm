var allCellsDistOrder = (R, C, r0, c0) => {
    const res = [];
    const hash = {};

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            const d = getD(i, j, r0, c0);
            if (!hash[d]) {
                hash[d] = [[i, j]];
            } else {
                hash[d].push([i, j]);
            }
        }
    }
    for (let d = 0; d <= R + C - 2; d++) {
        if (!hash[d]) continue;
        for (const pair of hash[d]) {
            res.push(pair);
        }
    }
    return res;
};

var getD = (x1, y1, x2, y2) => {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};


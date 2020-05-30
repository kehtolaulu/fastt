const distance = (a, b) => {
    let d = new Array(a.length + 1);
    for (let i = 0; i < d.length; i++) {
        d[i] = new Array(b.length + 1);
        for (let j = 0; j < d[i].length; j++) {
            if (j === 0) {
                d[i][j] = i;
            } else if (i === 0) {
                d[i][j] = j;
            } else {
                d[i][j] = 0;
            }
        }
    }
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            if (a[i - 1] === b[j - 1]) {
                d[i][j] = d[i - 1][j - 1];
            } else {
                d[i][j] = 1 + Math.min(
                    d[i - 1][j],
                    d[i][j - 1],
                    d[i - 1][j - 1]
                );
            }
        }
    }
    return d[a.length][b.length];
};

export default distance;

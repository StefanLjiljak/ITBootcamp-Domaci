function numMin(a, b, c) {
    if (a <= b && a <= c) return a;
    else if (b <= a && b <= c) return b;
    else if (c <= a && c <= b) return c;
}

function cmPrice(price, halfRadious) {
    let surface = Math.pow(halfRadious, 2) * Math.PI;
    let output = price / surface;
    return output;
}

function minPrice(i, j, k, l, m, n) {
    return numMin(cmPrice(i, j), cmPrice(k, l), cmPrice(m, n));
}
minPrice(4, 10, 2, 5, 5, 1);
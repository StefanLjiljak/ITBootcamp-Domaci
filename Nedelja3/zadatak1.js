function numMax(a, b, c) {
    if (a > b && a > c) return a;
    else if (b > a && b > c) return b;
    else if (c > a && c > b) return c;
    else return `Two or more equal num`;
}
console.log(numMax(5, 6, 6));
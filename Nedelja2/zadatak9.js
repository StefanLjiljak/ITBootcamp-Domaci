let n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= (n - i); j++) {
        row += ' ';
    }

    for (let k = 1; k <= i; k++) {
        row += '#';
    }

    for (let j = 1; j <= (n - (n - 1)); j++) {
        row += ' ';
    }

    for (let j = 1; j <= i; j++) {
        row += '#';
    }

    console.log(row);
}
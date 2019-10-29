{
    let i, x = 5,
        y = 1000,
        z = x * y;
    for (i = 5; i <= z; i++) {
        if (i % x == 0) {
            console.log(i);
        }
    }
}
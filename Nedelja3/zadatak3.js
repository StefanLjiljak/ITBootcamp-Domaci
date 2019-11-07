function divisibleByFive(arr) {
    for (let i of arr) {
        if (i % 5 == 0) console.log(i)
    }
}
divisibleByFive([1, 2, 3, 4, 5, 10, 15, 23, 1, 5]);
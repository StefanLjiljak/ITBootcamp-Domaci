function cmPrice(price, halfRadious) {
    let surface = Math.pow(halfRadious, 2) * Math.PI;
    return price / surface;
}
console.log(cmPrice(500, 25));
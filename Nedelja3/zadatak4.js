function lifeSupply(numPerMonth, age) {
    return numPerMonth * 12 * (100 - age);
}
lifeSupply(10, 26);
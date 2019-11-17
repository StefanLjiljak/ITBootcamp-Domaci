let meatloaf = {
    name: 'Classic meatloaf with tomato sauce:',
    difficulty: 'amateur',
    ingredients: [{
            name: 'egg',
            quant: 10,
            price: 15
        },
        {
            name: 'tomato',
            quant: 5,
            price: 40
        },
        {
            name: 'garlic',
            quant: 3,
            price: 30
        },
        {
            name: 'carrots',
            quant: 4,
            price: 50
        },
        {
            name: 'yogurt',
            quant: 2,
            price: 90
        }
    ]
};

meatloaf.mealPrice = function() {
    let totalSum = 0;
    this.ingredients.forEach(element => {
        let ingSum = element.quant * element.price;
        totalSum += ingSum;
    })
    console.log(totalSum)
}

meatloaf.mealPrice()
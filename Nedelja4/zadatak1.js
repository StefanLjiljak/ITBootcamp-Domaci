let meatloaf = {
    name: 'Classic meatloaf with tomato sauce:',
    difficulty: 'amateur',
    ingredients: ['olive oil', 'onion', 'garlic', 'carrot', 'egg']

}

let crispy = {
    name: 'Classic Crispy cod fingers with wedges & dill slaw with tomato sauce:',
    difficulty: 'easy',
    ingredients: ['potato', 'cornichons', 'garlic', 'breadcrumbs', 'egg']

}

let orzo = {
    name: 'Orzo & tomato soup:',
    difficulty: 'middle',
    ingredients: ['tomato', 'celery', 'pesto', 'breadcrumbs', 'egg']

}

let lamb = {
    name: 'Lamb & quinoa burgers with beetroot tzatziki:',
    difficulty: 'hard',
    ingredients: ['lamb', 'rice', 'yogurt', 'breadcrumbs', 'carrots']

}

let carbonara = {
    name: 'Carbonara with chicken:',
    difficulty: 'master',
    ingredients: ['butter', ' spaghetti', ' eggs', ' pancetta', ' olive oil']

}

function Recipes(recipe) {
    console.log(recipe.name)
    console.log(Object.keys(recipe)[1] + ': ' + recipe.difficulty);
    console.log(Object.keys(recipe)[2] + ': ' + recipe.ingredients);

}
Recipes(carbonara);
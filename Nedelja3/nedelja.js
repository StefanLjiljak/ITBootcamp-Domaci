let x = document.getElementById('counter');
let orderButtons = document.getElementsByClassName('btn-order');
let pizzaCount = '';
let orderButtonsNow = document.getElementsByClassName('btn-order-now');

for (let i of orderButtons) {
    i.addEventListener('click', function() {
        Increment(i)
    })
}

function Increment(element) {
    pizzaCount++;
    x.innerHTML = pizzaCount;
}

for (let j of orderButtonsNow) {
    j.addEventListener('click', function() {
        Message(j);
        Reset(j);
    })
}


function Message(element) {
    if (pizzaCount == '') {
        x.innerHTML = `Грешка, празна поруџбина.`
    } else {
        x.innerHTML = `Наручили сте ${pizzaCount} пица, ` + displayDate()

    }
};

function Reset(element) {
    pizzaCount = '';
};

function displayDate() {
    let date = new Date();
    let day = date.getUTCDate();
    let month = date.getUTCMonth();
    let year = date.getUTCFullYear();
    let hour = date.getUTCHours();
    let minute = date.getUTCMinutes();
    return ` дана ${day}:${month+1}:${year} у ${hour+1}:${minute}`;
}
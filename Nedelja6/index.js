let dataUse;
fetch('index.json')
    .then(response => response.json())
    .then(data => dataUse = data);

btn.onclick = JsonCheck;


function JsonCheck() {
    let check = dataUse.some(x =>
        x.username == user.value && x.password == pass.value
    );

    if (check) {
        alert('logged')
    } else if (!((user.value.length >= 3) && (user.value.length <= 15) && (pass.value.length >= 3) && (pass.value.length <= 15))) {
        alert('Neodgovarajuca duzina')
    } else if (!isNaN(user.value.charAt(0))) {
        alert('Prvi karakter User-a ne sme biti broj')
    } else {
        alert('incorrect')
    }

};


/* 5.  fetch(server) plus metod POST input.values u requestu nakon cega server
     vrsi obradu i proveru u svojoj bazi i vraca nazad response true/false nakon cega mi radimo
     sa tim responsom dalju obradu tj sta vec zelimo.
*/
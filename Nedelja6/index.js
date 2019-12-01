function Validate() {
    if (!((user.value.length >= 3) && (user.value.length <= 15) && (pass.value.length >= 3) && (pass.value.length <= 15))) {
        alert('Neodgovarajuca duzina')
    }
    if (!isNaN(user.value.charAt(0))) {
        alert('Prvi karakter User-a ne sme biti broj')
    }

    console.log(Number(user.value.charAt(0)))
}

btn.onclick = Validate;

// Validate radi dok ne ukljucim JsonChek ispod, pretpostavljam zato sto je JSON na lokalu

btn.onclick = JsonCheck;

function JsonCheck(e) {
    fetch('./index.json').then(response => response.json())
        .then(data => data = data.filter(x => x.username === user.value && x.password === pass.value));
    if (data) {
        alert('Ulogovan')
    } else {
        'Pogresan Username ili Pass'
    }
};

/* 5.  fetch(server) plus metod POST input.values u requestu nakon cega server
 vrsi obradu i proveru u svojoj bazi i vraca nazad response true/false nakon cega mi radimo
 sa tim responsom dalju obradu tj sta vec zelimo.*/
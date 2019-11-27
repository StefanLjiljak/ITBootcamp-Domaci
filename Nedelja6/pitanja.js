/*
1. JSON je standard najslicniji JS string tipu koji koristimo za razmenu
podataka browser-server i obrnuto.

2. Moduli su korisni za rasterecenje jednog obimnog JS fajla u vise manjih
i preglednijih JS fajlova. Takodje, tako mozemo lakse da grupisemo i razdvojimo 
komponente(npr.klase ili obj.) i funkcionalnosti(f-je) unutar jedne stranice.

primer:

folder:sayHi.js

export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

folder:index.js

import {sayHi} from './sayHi.js';

alert(sayHi); 
sayHi('Cvijan');


3. ECMAScript je script standard kojim se definise sta skript jezik mora da ispunjava
kao npr JS da bi bio priznat pod tim standard nazivom.
Npr na osnovu ECMAScript standarda vrsi se poredjenje koji browser podrzava tacno koju
verziju JS-a unutar odredjene verzije ES standarda.

4. HTTP je protokol koji  definise proces slanja zahteva, primanja zahteva, slanja odgovora i
primanja odgovora u medjusobnoj komunikaciji izmedju dve strane klijent-server.

REST API je standardizovan arhitektonski stil za projektovanje nacina komunikacije izmedju mrežnih aplikacija.
Njegove najbitnije metode su u stvari HTTP metode: GET, POST, PUT, DELETE.

5. == predstavlja obicno poredjenje dok === predstavlja strogo poredjenje koje za
parametre poredjenja uzima osim vrednosti i tip podataka.

6. console.log(typeof typeof true) vraca string
Pretpostavljam zato sto se prvo izvrsava ovaj typeof desno pa tek onda ovaj levo
nad rezultatom ovog desno koji je string.
To bi bilo isto kao kada bi napisali console.log(typeof (typeof true))




*/
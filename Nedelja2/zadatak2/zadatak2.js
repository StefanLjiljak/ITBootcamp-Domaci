let wDom = 'Welcome to DOM';
let ins = document.getElementById('welc');
ins.innerHTML = wDom;

let divAdd = document.getElementById('addedDiv');
let testPara = 'This is added paragraph.';
divAdd.innerHTML = `<p>${testPara}</p>`;
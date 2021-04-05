'use strict'

let pic = document.getElementById('pic');
let count = 1;
let path = `../photos/${count}.jpeg`;

function counter() {
  count++
  if (count === 4) {
    count === 1
  }
}
//setTimeout(counter(), 1000);
counter()

let img = document.createElement('img');
img.setAttribute('src', path);
pic.appendChild(img);

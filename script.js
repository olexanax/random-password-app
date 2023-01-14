'use strict';

const wrapper = document.querySelector('.wrapper'),
      password = document.querySelector('.password'),
      btn = document.querySelector('.btn'),
      chars = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM',
      value = [];
password.textContent = `press red button to start)`;

function generPassword(num){
    return chars.split('')[Math.floor(Math.random() * num)];
}

btn.addEventListener('click', () => {
    for(let i = 0; i < 8; i++){
        value[i] = generPassword(62);
    }
    password.textContent = value.join('');
});
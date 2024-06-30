// script.js

window.onload = function() {
    document.getElementById('popup-box').classList.add('show');
};

document.getElementById('close-popup1').onclick = function() {
    document.getElementById('popup-box').classList.remove('show');
};

document.getElementById('close-popup2').onclick = function() {
    document.getElementById('popup-box').classList.remove('show');
};
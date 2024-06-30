// script.js

window.onload = function() {
    document.getElementById('popup-box').classList.add('show');
};

document.getElementById('close-popup').onclick = function() {
    document.getElementById('popup-box').classList.remove('show');
};
/* jshint esversion: 6 */
let button = document.getElementById('nav-button');

console.log();

// close mobile menu initially
if (getComputedStyle(button, null).display !== 'none') {
    $('.nav-item').toggle();
}

button.onclick = () => {
    // toggle between open and closed hamburger
    if (button.textContent == '✖') {
        button.textContent = '☰';
    } else {
        button.textContent = '✖';
    }

    // toggle between open and closed nav menu
    $('.nav-item').toggle('fast');
};
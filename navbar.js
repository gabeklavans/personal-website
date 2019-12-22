/* jshint esversion: 6 */
let button = document.querySelector('#nav-button');
button.onclick = () => {
    // toggle between open and closed hamburger
    if (button.textContent == "☰") {
        button.textContent = '✖';
    } else {
        button.textContent = '☰';
    }

    // toggle between open and closed nav menu
    $(".nav-item").toggle("fast");
};
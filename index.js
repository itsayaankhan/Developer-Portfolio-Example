let i = 0;

function toggleDarkMode() {

    const toggle = document.getElementById('toggleDark');
    const body = document.querySelector('body');

    body.classList.toggle('dark-mode');
    document.getElementById('toggleDark').innerHTML = (i === 0 ?  'Light Mode' : 'Dark Mode 🌓');
    i ^= 1
}


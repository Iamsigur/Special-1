document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const remember = event.target.remember.checked;

    // Add form handling logic here
    console.log('Form submitted:', { name, email, password, remember });
});

// Language selector logic
const dropdown = document.querySelector('.dropdown-content');
dropdown.addEventListener('click', function(event) {
    const lang = event.target.getAttribute('data-lang');
    if (lang) {
        document.querySelector('.dropbtn').textContent = lang.toUpperCase();
        // Add logic to change language here
        console.log('Language selected:', lang);
    }
});

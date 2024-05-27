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
document.addEventListener('DOMContentLoaded', () => {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from propagating to window
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', (event) => {
        if (!dropdownContent.contains(event.target) && !dropbtn.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});



document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting automatically

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;

    // Clear previous error messages
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    // Validation messages
    if (!firstName || !lastName) {
        errorMessages.innerHTML += '<p>First Name and Last Name are required!</p>';
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMessages.innerHTML += '<p>Please enter a valid email address!</p>';
        return;
    }
    if (phoneNumber.length < 10 || isNaN(phoneNumber)) {
        errorMessages.innerHTML += '<p>Please enter a valid 10-digit phone number!</p>';
        return;
    }
    if (password.length < 8) {
        errorMessages.innerHTML += '<p>Password must be at least 8 characters long!</p>';
        return;
    }

    // Log form data to console (excluding password for security)
    const formData = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        email: email
    };
    console.log(formData);

    // Optionally, clear the form after submission
    e.target.reset();

    // Optionally, display a success message or redirect
    alert('Form submitted successfully!'); // You can replace this with better user feedback.
});

// Script for future interactivity
console.log('Page loaded successfully');

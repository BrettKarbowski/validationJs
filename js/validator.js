document.getElementById('validate_Form').addEventListener('submit', function(event) {
    event.preventDefault();

    clearErrors();
    clearInvalidClasses();

    const first_Name = document.getElementById('first_Name').value;
    const last_Name = document.getElementById('last_Name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const match_Password = document.getElementById('match_Password').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const checkbox = document.getElementById('checkbox');
    const name_Pattern = /^[a-zA-Z]+$/;
    const phone_Pattern = /^\d{10}$/;
    const password_Pattern = /^(?=.*\d).{8,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const radio = document.querySelector('input[name="yesNo"]:checked');

    let isValid = true;

    // Validate first name
    if(!name_Pattern.test(first_Name)) {
        showError('first_Name_Error', 'First name must only contain letters.');
        first_Name.classList.add('invalid');
        isValid = false;
    }

    // Validate Last name
    if(!name_Pattern.test(last_Name)) {
        showError('last_Name_Error','Last name must only contain letters.');
        last_Name.classList.add('invalid');
        isValid = false;
    }

    // Validate email
    if(!emailPattern.test(email)) {
        showError('email_Error', 'Please enter a valid email address.');
        email.classList.add('invalid');
        isValid = false;
    }

    // Validate password
    if(!password_Pattern.test(password)) {
        showError('password_Error', 'Password must include 1 number and be at least 8 characters long.')
        password.classList.add('invalid');
        isValid = false;
    }

    // Validate matching password
    if(password != match_Password) {
        showError('match_Password_Error', 'Passwords do not match.')
        match_Password.classList.add('invalid');
        isValid = false;
    }


    // Validate phone
    if(!phone_Pattern.test(phone)) {
        showError('phone_Error', 'Phone number must be 10 digits long.')
        phone.classList.add('invalid');
        isValid = false;
    }

    // Validate radio
    if(!radio) {
        showError('radio_Error', 'Please select yes or no.');
        radio.classList.add('invalid');
        isValid = false;
    }

    // Validate checkbox
    if (!checkbox.checked) {
        showError('checkbox_Error', 'Please check the box.');
        checkbox.classList.add('invalid');
        isValid = false;
    }

    // Validate date
    if(!date) {
        showError('date_Error', 'Please select a date.');
        date.classList.add('invalid');
        isValid = false;
    } else {
        const today = new Date();
        const selectedDate = new Date(date);

        // Check if the selected date is in the future.
        if (selectedDate > today) {
            showError('date_Error', 'Selected date cannot be in the future.');
            date.classList.add('invalid');
            isValid = false;
        }
    }

    // If valid form, submit.
    if(isValid) {
        alert('Form successfully submitted. Yay.');
    }

    // Function to show the error messages.
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    // Function to clear error messages.
    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => {
            error.textContent = '';
        });
    }

    // Function to clear invalid classes.
    function clearInvalidClasses() {
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.classList.remove('invalid');
        });
    }
})
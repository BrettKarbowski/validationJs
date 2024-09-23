// Import utilities
import { addSubmitListener } from 'eventUtils.js';
import { validateEmail, validatePasswordStrength, validateRequiredField, validateDateFormat, validateCustomRegex } from 'validationUtils.js';
import { sendFormData, handleResponse } from 'ajaxUtils.js';
import { formatPhoneNumber, showError, clearError } from 'utilityFunctions.js';

// DOM Element Selection
const form = document.getElementById('validate_Form');
const firstNameField = document.getElementById('first_Name');
const lastNameField = document.getElementById('last_Name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const matchPasswordField = document.getElementById('match_Password');
const phoneField = document.getElementById('phone');
const dateField = document.getElementById('date');
const checkbox = document.getElementById('checkbox');
const radioButtons = document.querySelectorAll('input[name="yesNo"]');

// Utility functions for clearing and showing errors
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(error => error.textContent = '');
}

// Validation Logic
const validateForm = () => {
    let isValid = true;

    // First Name Validation
    if (!validateCustomRegex(firstNameField.value, /^[a-zA-Z]+$/)) {
        showError('first_Name', 'First name must only contain letters.');
        isValid = false;
    } else {
        clearError('first_Name');
    }

    // Last Name Validation
    if (!validateCustomRegex(lastNameField.value, /^[a-zA-Z]+$/)) {
        showError('last_Name', 'Last name must only contain letters.');
        isValid = false;
    } else {
        clearError('last_Name');
    }

    // Email Validation
    if (!validateEmail(emailField.value)) {
        showError('email', 'Please enter a valid email address.');
        isValid = false;
    } else {
        clearError('email');
    }

    // Password Validation
    if (!validatePasswordStrength(passwordField.value)) {
        showError('password', 'Password must include at least 1 number and be 8 characters long.');
        isValid = false;
    } else {
        clearError('password');
    }

    // Match Password Validation
    if (passwordField.value !== matchPasswordField.value) {
        showError('match_Password', 'Passwords do not match.');
        isValid = false;
    } else {
        clearError('match_Password');
    }

    // Phone Validation
    if (!validateCustomRegex(phoneField.value, /^\d{10}$/)) {
        showError('phone', 'Phone number must be 10 digits long.');
        isValid = false;
    } else {
        clearError('phone');
        phoneField.value = formatPhoneNumber(phoneField.value); // Format phone number
    }

    // Date Validation
    if (!validateRequiredField(dateField.value) || !validateDateFormat(dateField.value)) {
        showError('date', 'Please select a valid date.');
        isValid = false;
    } else {
        clearError('date');
    }

    // Radio Button Validation
    const selectedRadio = [...radioButtons].some(radio => radio.checked);
    if (!selectedRadio) {
        showError('radio_Error', 'Please select yes or no.');
        isValid = false;
    } else {
        clearError('radio_Error');
    }

    // Checkbox Validation
    if (!checkbox.checked) {
        showError('checkbox_Error', 'Please check the box.');
        isValid = false;
    } else {
        clearError('checkbox_Error');
    }

    return isValid;
};

// Form Submission Handling
addSubmitListener('validate_Form', () => {
    clearErrors();
    
    if (validateForm()) {
        const formData = new FormData(form);
        
        // Send form data via AJAX
        sendFormData('/submitForm', formData)
            .then(response => handleResponse(response))
            .catch(error => alert(error.message));
    } else {
        alert('Please correct the errors in the form');
    }
});

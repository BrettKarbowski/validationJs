// utilityFunctions.js

/**
 * Formats a given phone number by removing non-digit characters and 
 * formatting it into a standard XXX-XXX-XXXX format.
 * 
 * @param {string} phoneNumber - The phone number to format.
 * @returns {string} - The formatted phone number in the form XXX-XXX-XXXX.
 * 
 * @example
 * const formattedPhone = formatPhoneNumber('1234567890');  // '123-456-7890'
 */
export const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber
        .replace(/\D/g, '')                // Remove all non-digit characters
        .replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');  // Format as XXX-XXX-XXXX
};

/**
 * Capitalizes the first letter of a given name and ensures the rest of the name is lowercase.
 * 
 * @param {string} name - The name to capitalize.
 * @returns {string} - The formatted name with the first letter capitalized and the rest lowercase.
 * 
 * @example
 * const capitalized = capitalizeNames('john');  // 'John'
 */
export const capitalizeNames = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

/**
 * Formats a given date string into MM/DD/YYYY format.
 * 
 * @param {string | Date} date - The date string or Date object to format.
 * @returns {string} - The formatted date string in MM/DD/YYYY format.
 * 
 * @example
 * const formattedDate = formatDate('2023-09-23');  // '9/23/2023'
 */
export const formatDate = (date) => {
    const d = new Date(date);  // Convert input to a Date object
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;  // Format as MM/DD/YYYY
};

/**
 * Displays an error message next to a form field by setting the text content of 
 * an associated error message element. The error message element should have 
 * an id with the pattern `fieldId_error`.
 * 
 * @param {string} fieldId - The id of the form field (without the "_error" suffix).
 * @param {string} message - The error message to display.
 * 
 * @example
 * showError('email', 'Invalid email address');  // Displays error for email field
 */
export const showError = (fieldId, message) => {
    const errorElement = document.getElementById(`${fieldId}_error`);
    errorElement.textContent = message;  // Set error message content
};

/**
 * Clears the error message for a form field by setting the text content of 
 * the associated error message element to an empty string.
 * 
 * @param {string} fieldId - The id of the form field (without the "_error" suffix).
 * 
 * @example
 * clearError('email');  // Clears the error message for the email field
 */
export const clearError = (fieldId) => {
    const errorElement = document.getElementById(`${fieldId}_error`);
    errorElement.textContent = '';  // Clear error message content
};

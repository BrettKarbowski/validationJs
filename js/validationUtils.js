// validationUtils.js

/**
 * Validates whether a given email follows a standard email format.
 * 
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email is valid, false otherwise.
 * 
 * @example
 * const isValidEmail = validateEmail('test@example.com');  // true
 */
export const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Regular expression for valid email format
    return emailPattern.test(email);  // Test email against the regex pattern
};

/**
 * Validates the strength of a password by checking if it is at least 8 characters long 
 * and contains at least one numeric digit.
 * 
 * @param {string} password - The password to validate.
 * @returns {boolean} - Returns true if the password meets the strength criteria, false otherwise.
 * 
 * @example
 * const isStrongPassword = validatePasswordStrength('Password123');  // true
 */
export const validatePasswordStrength = (password) => {
    const passwordPattern = /^(?=.*\d).{8,}$/;  // Requires at least 8 characters and one digit
    return passwordPattern.test(password);  // Test password against the regex pattern
};

/**
 * Validates if a required form field has been filled out (i.e., it's not empty or just whitespace).
 * 
 * @param {string} value - The value to check.
 * @returns {boolean} - Returns true if the field contains a non-empty, non-whitespace value, false otherwise.
 * 
 * @example
 * const isRequiredFilled = validateRequiredField('John Doe');  // true
 */
export const validateRequiredField = (value) => {
    return value.trim() !== '';  // Check if the value is not empty or whitespace
};

/**
 * Validates a given value against a custom regular expression pattern.
 * 
 * @param {string} value - The value to validate.
 * @param {RegExp} regex - The custom regular expression to validate against.
 * @returns {boolean} - Returns true if the value matches the regex, false otherwise.
 * 
 * @example
 * const isValidCustom = validateCustomRegex('123456', /^\d+$/);  // true
 */
export const validateCustomRegex = (value, regex) => {
    return regex.test(value);  // Test the value against the provided regex pattern
};

/**
 * Validates if a given date string is in a valid date format.
 * 
 * @param {string} date - The date string to validate.
 * @returns {boolean} - Returns true if the date string is a valid date, false otherwise.
 * 
 * @example
 * const isValidDate = validateDateFormat('2023-09-23');  // true
 */
export const validateDateFormat = (date) => {
    const parsedDate = Date.parse(date);  // Parse the date string
    return !isNaN(parsedDate);  // Ensure the parsed date is a valid number (not NaN)
};

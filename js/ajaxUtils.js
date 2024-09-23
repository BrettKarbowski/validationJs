// ajaxUtils.js

/**
 * Sends form data to a specified URL via a POST request and returns the JSON response.
 * 
 * @param {string} url - The endpoint to which the form data should be sent.
 * @param {Object} formData - The form data to send in the request body (should be an object).
 * @returns {Promise<Object>} - A promise that resolves to the JSON response from the server.
 * @throws {Error} - Throws an error if the form submission fails.
 * 
 * @example
 * const formData = {
 *     name: 'John Doe',
 *     email: 'john.doe@example.com'
 * };
 * 
 * sendFormData('https://example.com/api/submit', JSON.stringify(formData))
 *     .then(response => handleResponse(response))
 *     .catch(error => console.error(error));
 */
export const sendFormData = async (url, formData) => {
    try {
        const response = await fetch(url, {
            method: 'POST',  // Specify the HTTP method
            body: formData,  // Send form data as the request body
            headers: {
                'Content-Type': 'application/json'  // Specify that the content is JSON
            }
        });
        return await response.json();  // Parse and return the JSON response
    } catch (error) {
        throw new Error('Form submission failed');  // Throw error if submission fails
    }
};

/**
 * Handles the response from a form submission, displaying success or error messages.
 * 
 * @param {Object} response - The JSON response object from the server.
 * @param {boolean} response.success - A boolean indicating if the form submission was successful.
 * @param {string} [response.message] - An optional message from the server (in case of error).
 * 
 * @example
 * const response = {
 *     success: true
 * };
 * 
 * handleResponse(response);  // Will show an alert for successful submission
 * 
 * // Error example:
 * const errorResponse = {
 *     success: false,
 *     message: 'Email already exists'
 * };
 * handleResponse(errorResponse);  // Will show an alert with the error message
 */
export const handleResponse = (response) => {
    if (response.success) {
        alert('Form submitted successfully!');  // Success message
    } else {
        alert('Error: ' + response.message);  // Error message
    }
};

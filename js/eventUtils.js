// eventUtils.js

/**
 * Adds a 'submit' event listener to a form, prevents the default form submission, 
 * and executes a callback function when the form is submitted.
 * 
 * @param {string} formId - The id of the form element to add the listener to.
 * @param {Function} callback - The callback function to execute when the form is submitted.
 * 
 * @example
 * // Define the callback function
 * const handleSubmit = () => {
 *     console.log('Form submitted!');
 * };
 * 
 * // Add the submit listener to the form with id 'userForm'
 * addSubmitListener('userForm', handleSubmit);
 */
export const addSubmitListener = (formId, callback) => {
    const form = document.getElementById(formId);
    
    // Add submit event listener
    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent the default form submission behavior
        callback();  // Call the provided callback function
    });
};

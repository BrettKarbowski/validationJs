// formUtils.js

/**
 * Creates a <form> element with a specified id and populates it with form fields.
 * 
 * @param {string} id - The id attribute for the form.
 * @param {Array} fields - An array of form field elements to be appended to the form.
 * @returns {HTMLFormElement} - The created form element.
 * 
 * @example
 * const textField = createTextInput('username', 'Enter your username', true);
 * const emailField = addFormField('email', 'email', 'Enter your email', true);
 * const form = createForm('userForm', [textField, emailField]);
 * document.body.appendChild(form);
 */
export const createForm = (id, fields) => {
    const form = document.createElement('form');
    form.id = id;
    fields.forEach(field => form.appendChild(field));
    return form;
};

/**
 * Creates an input field of a specific type with attributes like id, placeholder, and required.
 * 
 * @param {string} type - The type of the input (e.g., 'text', 'email', 'password').
 * @param {string} id - The id attribute for the input field.
 * @param {string} placeholder - Placeholder text for the input field.
 * @param {boolean} [required=false] - If true, sets the required attribute for the input.
 * @returns {HTMLInputElement} - The created input element.
 * 
 * @example
 * const emailField = addFormField('email', 'userEmail', 'Enter your email');
 * document.body.appendChild(emailField);
 */
export const addFormField = (type, id, placeholder, required = false) => {
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.placeholder = placeholder;
    if (required) input.required = true;
    return input;
};

/**
 * Creates a text input field using the addFormField helper.
 * 
 * @param {string} id - The id attribute for the text input field.
 * @param {string} placeholder - Placeholder text for the input field.
 * @param {boolean} [required=false] - If true, sets the required attribute for the input field.
 * @returns {HTMLInputElement} - The created text input element.
 * 
 * @example
 * const firstNameField = createTextInput('firstName', 'Enter your first name', true);
 * document.body.appendChild(firstNameField);
 */
export const createTextInput = (id, placeholder, required = false) => 
    addFormField('text', id, placeholder, required);

/**
 * Creates a <select> dropdown with the specified options.
 * 
 * @param {string} id - The id attribute for the dropdown element.
 * @param {Array} options - An array of option objects { value, label } to be added to the dropdown.
 * @returns {HTMLSelectElement} - The created dropdown element.
 * 
 * @example
 * const dropdown = createDropdown('gender', [
 *   { value: 'male', label: 'Male' },
 *   { value: 'female', label: 'Female' }
 * ]);
 * document.body.appendChild(dropdown);
 */
export const createDropdown = (id, options) => {
    const select = document.createElement('select');
    select.id = id;
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.textContent = option.label;
        select.appendChild(opt);
    });
    return select;
};

/**
 * Removes a form field from a form by its field id.
 * 
 * @param {HTMLFormElement} form - The form from which to remove the field.
 * @param {string} fieldId - The id of the field to be removed.
 * 
 * @example
 * const form = document.getElementById('userForm');
 * removeFormField(form, 'firstName');
 */
export const removeFormField = (form, fieldId) => {
    const field = document.getElementById(fieldId);
    if (field) form.removeChild(field);
};

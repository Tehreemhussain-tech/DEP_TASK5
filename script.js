document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservation');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const dateInput = document.getElementById('date');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const dateError = document.getElementById('dateError');

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^\d{11}$/;


    function validateField(inputField, errorField, validationFunction) {
        if (!validationFunction(inputField.value.trim())) {
            errorField.textContent = `Please ${inputField.placeholder.toLowerCase()}.`;
            errorField.style.display = 'block';
            inputField.style.borderColor = 'red'; 
            return false;
        } else {
            errorField.style.display = 'none';
            inputField.style.borderColor = ''; 
            return true;
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        
        const isNameValid = validateField(nameInput, nameError, value => value !== '');
        const isEmailValid = validateField(emailInput, emailError, value => emailPattern.test(value));
        const isPhoneValid = validateField(phoneInput, phoneError, value => phonePattern.test(value));
        const isDateValid = validateField(dateInput, dateError, value => value !== '');


        if (isNameValid && isEmailValid && isPhoneValid && isDateValid) {
            alert('Form submitted successfully!');

            nameInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
            dateInput.value = '';

            nameError.style.display = 'none';
            emailError.style.display = 'none';
            phoneError.style.display = 'none';
            dateError.style.display = 'none';

        } else {
            alert('Required fields must be filled in.');
        }
    });

});    
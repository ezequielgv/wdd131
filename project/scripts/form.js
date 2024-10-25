// Array of error messages
const errorMessages = {
    name: 'Please enter a valid name (minimum 2 characters, only letters)',
    email: 'Please enter a valid email address',
    phone: 'Please enter a valid phone number (minimum 10 digits)',
    message: 'Please enter a message (minimum 10 characters)'
};

// Object to store validations
const validators = {
    name: (value) => value.length >= 2 && /^[a-zA-Z\s]*$/.test(value),
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    phone: (value) => value === '' || /^\d{10,}$/.test(value.replace(/[-\s]/g, '')),
    message: (value) => value.length >= 10
};

// Function to display errors
function showError(inputElement, message) {
    const errorElement = document.getElementById(`${inputElement.id}Error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.color = 'red';
        errorElement.style.fontSize = '0.8em';
    }
}

// Function to clear errors
function clearError(inputElement) {
    const errorElement = document.getElementById(`${inputElement.id}Error`);
    if (errorElement) {
        errorElement.textContent = '';
    }
}

// Function to save to localStorage
function saveToLocalStorage(formData) {
    const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
}

// Event when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    if (!form) return;

    // Add real-time validation for each field
    Object.keys(validators).forEach(fieldName => {
        const input = form.querySelector(`[name="${fieldName}"]`);
        if (input) {
            input.addEventListener('input', () => {
                const isValid = validators[fieldName](input.value);
                if (!isValid && input.value !== '') {
                    showError(input, errorMessages[fieldName]);
                } else {
                    clearError(input);
                }
            });
        }
    });

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate all fields
        let isValid = true;
        const formData = {};

        Object.keys(validators).forEach(fieldName => {
            const input = form.querySelector(`[name="${fieldName}"]`);
            if (input) {
                formData[fieldName] = input.value;
                const fieldIsValid = validators[fieldName](input.value);
                if (!fieldIsValid && (fieldName !== 'phone' || input.value !== '')) {
                    isValid = false;
                    showError(input, errorMessages[fieldName]);
                }
            }
        });

        if (isValid) {
            // Save to localStorage
            saveToLocalStorage(formData);

            // Show success message
            alert(`Thank you ${formData.name}! We'll get back to you soon.`);
            
            // Clear form
            form.reset();
            
            // Clear error messages
            Object.keys(validators).forEach(fieldName => {
                const input = form.querySelector(`[name="${fieldName}"]`);
                if (input) clearError(input);
            });
        }
    });
});
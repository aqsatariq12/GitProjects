// script.js

// Get the form element by id
const form = document.getElementById('add-project-form');
const confirmationMessage = document.getElementById('confirmation-message');
const fileInput = document.getElementById('project-file');
const fileNameDisplay = document.getElementById('file-name');

// Function to handle file input change (to display the file name)
fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];
    if (file) {
        fileNameDisplay.textContent = file.name; 
    } else {
        fileNameDisplay.textContent = 'No file chosen'; 
    }
});

// Function to handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting immediately

    // Get the values from the form
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const techStack = document.getElementById('tech-stack').value;
    const difficulty = document.querySelector('input[name="difficulty"]:checked');
    const file = fileInput.files[0]; // Get the selected file

    // Simple validation to check if all fields are filled
    if (!title || !description || !techStack || !difficulty) {
        confirmationMessage.textContent = 'Please fill in all fields before submitting.';
        confirmationMessage.style.backgroundColor = '#f44336';
        confirmationMessage.style.color = 'white';
        return; // Stop form submission
    }

    // If all fields are valid, show a confirmation message
    confirmationMessage.textContent = 'Project added successfully!';
    confirmationMessage.style.backgroundColor = '#4CAF50';
    confirmationMessage.style.color = 'white';

    // Optionally, reset the form after successful submission
    setTimeout(function() {
        form.reset(); // Reset form fields
        confirmationMessage.textContent = ''; 
        fileNameDisplay.textContent = 'No file chosen'; 
    }, 2000); // Clear message after 2 seconds
});

// Function to clear the form when the Cancel button is clicked
function cancelForm() {
    const userConfirmed = confirm('Are you sure you want to cancel? All your changes will be lost.');

    if (userConfirmed) {
        form.reset(); 
        confirmationMessage.textContent = ''; 
        fileNameDisplay.textContent = 'No file chosen'; 
    }
}

// JavaScript (script.js)

// Function to handle form submission
function submitMessage() {
    // Get the user's message from the text area
    const message = document.querySelector('textarea').value;

    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;

    // Append the message element to the message container
    const messageContainer = document.getElementById('message-container');
    messageContainer.appendChild(messageElement);

    // Clear the text area after submission
    document.querySelector('textarea').value = '';
}

// Add an event listener to the form submit button
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    submitMessage(); // Call the function to handle the message submission
});

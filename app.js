// Get form elements
const form = document.querySelector("form");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const pwdError = document.querySelector("#password + span.error");

// Catch password mismatch
form.addEventListener("submit", (event) => {
    if(password.value != confirm.value) {
        // Display error
        showError("Passwords do not match");
        // Prevent form submission
        event.preventDefault();
    }
});

// Display custom error
const showError = (prompt) => {
    // Set error textx
    pwdError.textContent = prompt;
    // Update class name to activate styling change
    pwdError.className = "error active";
}
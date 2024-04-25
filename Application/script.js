 // JavaScript code for login form validation and submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if username and password are correct (dummy validation)
    if (username === "admin" && password === "password") {
        // Redirect to the content page after successful login
        window.location.href = "HomePage.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

 
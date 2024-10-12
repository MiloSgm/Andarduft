document.addEventListener("DOMContentLoaded", () => {
    // Example account handling
    const loginForm = document.querySelector("#loginForm");
    const signupForm = document.querySelector("#signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.querySelector("#loginUsername").value;
            const password = document.querySelector("#loginPassword").value;

            // Simulate login with local storage
            const storedUsername = localStorage.getItem("username");
            const storedPassword = localStorage.getItem("password");

            if (username === storedUsername && password === storedPassword) {
                alert("Login successful!");
                window.location.href = "index.html"; // Redirect to home
            } else {
                alert("Invalid username or password");
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.querySelector("#signupUsername").value;
            const password = document.querySelector("#signupPassword").value;

            // Store user data in local storage
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            alert("Account created successfully!");
            window.location.href = "login.html"; // Redirect to login page
        });
    }
});

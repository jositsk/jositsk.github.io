document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("myModal");
    const passwordForm = document.getElementById("passwordForm");
    const passwordInput = document.getElementById("passwordInput");
    const mainContent = document.querySelector("main");
  
    // Show the modal
    modal.style.display = "block";
  
    // Handle form submission
    passwordForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const password = "3005"; // Replace with the actual password
  
        if (passwordInput.value === password) {
            modal.style.display = "none";
            // Show the main content
            mainContent.style.display = "block";
        } else {
            // Redirect to the "/home" page
            alert("Contraseña incorrecta. Redirigir a Home");
            window.location.href = "/";
        }
    });
});

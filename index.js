document.getElementById("contactForm").addEventListener("submit", function (event) {
            var emailField = document.getElementById("email");
            var email = emailField.value.trim();
            if (!isValidEmail(email)) {
                event.preventDefault();
                emailField.classList.add("is-invalid"); // Add Bootstrap's is-invalid class
                emailField.focus();
                return false;
            }
            return true;
        });

        // Function to validate email format
        function isValidEmail(email) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
document.getElementById("contactForm").addEventListener("submit", function (event) {
            event.preventDefault();

            var name = document.getElementById("name").value.trim();
            var email = document.getElementById("email").value.trim();
            var phone = document.getElementById("phone").value.trim();
            var message = document.getElementById("message").value.trim();


            if (name === "" || email === "" || phone === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Additional validation (e.g., email format)

            // If all validation passes, submit the form
            alert("Form submitted successfully!");
            document.getElementById("contactForm").reset();
        });
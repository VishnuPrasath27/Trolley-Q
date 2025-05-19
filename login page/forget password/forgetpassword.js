document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const username = form.querySelector('input[type="text"]');
    const password = form.querySelectorAll('input[type="password"]');

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent form submission

        if (
            username.value.trim() === "" ||
            password[0].value.trim() === "" ||
            password[1].value.trim() === ""
        ) {
            alert("Please enter all the details.");
        } else if (password[0].value !== password[1].value) {
            alert("Passwords do not match.");
        } else {
            alert("Form submitted successfully!");
            form.reset(); // optional: reset form
        }
    });
});

function goToStep(stepNumber) {
            document.querySelectorAll(".step").forEach(step => step.style.display = "none");
            document.getElementById(`step${stepNumber}`).style.display = "block";
        }

        document.getElementById("resetForm").addEventListener("submit", function (e) {
            e.preventDefault();
            const pass = document.getElementById("newPass").value;
            const rePass = document.getElementById("rePass").value;
            if (pass !== rePass) {
                alert("Passwords do not match!");
            } else {
                alert("Password reset successfully!");
                // Here you can trigger a backend call
            }
        });
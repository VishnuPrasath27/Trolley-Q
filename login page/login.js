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

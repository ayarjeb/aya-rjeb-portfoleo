// script.js
document.querySelector("#userForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form inputs using querySelector
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#mail").value;
    const number = document.querySelector("#number").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;

    // Show the values in an alert
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}\nPhone Number: ${number}\nSubject: ${subject}`);
    document.querySelector("#name").value = "";
    document.querySelector("#mail").value = "";
    document.querySelector("#number").value = "";
    document.querySelector("#subject").value = "";
    document.querySelector("#message").value = "";

});
let emailId = "ss@gmail.com";
let password = "sabsad"

function checkEmail() {
    let value = document.querySelector("#email").value;
    let errorSpan = document.querySelector(".error");
    errorSpan.innerHTML = "";
    if (value == "") {
        errorSpan.innerHTML = "Email Address is required!";
    } else if (value !== emailId) {
        errorSpan.innerHTML = "Invalid Email Address!";
    } else {
        window.location.href = "pass.html";
    }
}

function checkPassword() {
    let value = document.querySelector("#password").value;
    let errorSpan = document.querySelector(".error");
    errorSpan.innerHTML = "";
    if (value == "") {
        errorSpan.innerHTML = "Password is required!";
    } else if (value !== password) {
        errorSpan.innerHTML = "Invalid Password!";
    } else {
        window.location.href = "welcome.html";
    }
}
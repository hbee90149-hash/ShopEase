// ======================
// ELEMENTS
// ======================

const loginBtn =
document.getElementById("loginBtn");

const registerBtn =
document.getElementById("registerBtn");

const loginForm =
document.getElementById("loginForm");

const registerForm =
document.getElementById("registerForm");

// ======================
// TOGGLE FORMS
// ======================

loginBtn.addEventListener("click", () => {

    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");

    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");

});

registerBtn.addEventListener("click", () => {

    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");

    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

});

// ======================
// LOGIN
// ======================

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Login Successful ✅");

    loginForm.reset();

});

// ======================
// REGISTER
// ======================

registerForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Registration Successful ✅");

    registerForm.reset();

    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");

    registerBtn.classList.remove("active");
    loginBtn.classList.add("active");

});
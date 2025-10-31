const getStartedBtn = document.getElementById("getStartedBtn");
if (getStartedBtn) {
  getStartedBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}

let users = [];
if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
}

const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("signupUsername").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      alert("Email is already registered.");
      return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    window.location.href = "login.html"; 
  });
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailOrUsername = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const user = users.find(
      u => u.email === emailOrUsername || u.username === emailOrUsername
    );

    if (!user) {
      alert("User not found. Please sign up if you don't have an account.");
      return;

    }

    if (user.password !== password) {
      alert("Incorrect password.");
      return;
    }

    alert(`Welcome back, ${user.username}!`);
    window.location.href = "home.html"; 
  });
}

const togglePasswordIcons = document.querySelectorAll(".toggle-password");
togglePasswordIcons.forEach(icon => {
  icon.addEventListener("click", function () {
    const input = this.previousElementSibling;
    if (input.type === "password") {
      input.type = "text";
      this.src = "images/show.png";
    } else {
      input.type = "password";
      this.src = "images/hide.png";
    }
  });
});

const googleBtn = document.getElementById("loginGoogleBtn") || document.getElementById("signupGoogleBtn");
const facebookBtn = document.getElementById("loginFacebookBtn") || document.getElementById("signupFacebookBtn");

if (googleBtn) {
  googleBtn.addEventListener("click", () => {
    window.open("https://accounts.google.com", "_blank");
  });
}

if (facebookBtn) {
  facebookBtn.addEventListener("click", () => {
    window.open("https://www.facebook.com", "_blank");
  });
}
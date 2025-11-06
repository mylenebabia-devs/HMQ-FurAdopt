let users = JSON.parse(localStorage.getItem("users")) || [];

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailOrUsername = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const user = users.find(
      u => (u.email === emailOrUsername || u.username === emailOrUsername) && u.password === password
    );

    if (!user) {
      alert("Incorrect username, email, or password.");
      return;
    }

    if (user.role === "admin") {
      alert(`Welcome Admin, ${user.username}!`);
      window.location.href = "../admin page/home.html";
    } else {
      alert(`Welcome back, ${user.username}!`);
      window.location.href = "../user page/home.html";
    }
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

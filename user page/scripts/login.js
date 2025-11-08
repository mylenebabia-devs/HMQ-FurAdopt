let users = JSON.parse(localStorage.getItem("users")) || [];

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailOrUsername = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const user = users.find(
      u =>
        (u.email === emailOrUsername || u.username === emailOrUsername) &&
        u.password === password
    );

    if (!user) {
      alert("Incorrect username, email, or password.");
      return;
    }

    if (user.role === "admin") {
      alert(`Welcome Admin, ${user.username}!`);
      window.location.href = "../admin page/home.html";
    } else {
      alert(`Welcome, ${user.username}!`);
      // 🔽 Redirect user directly to the adoption form instead of home
      window.location.href = "../user page/adoption-form.html";
    }
  });
}

document.querySelectorAll(".toggle-password").forEach(icon => {
  icon.addEventListener("click", function () {
    const wrapper = this.closest(".input-wrapper");
    const input = wrapper.querySelector("input");

    if (input.type === "password") {
      input.type = "text";
      this.src = "images/show.png";
      this.alt = "Hide password";
    } else {
      input.type = "password";
      this.src = "images/hide.png";
      this.alt = "Show password";
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

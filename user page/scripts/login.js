let users = JSON.parse(localStorage.getItem("users")) || [];

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailOrUsername = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    // Check for admin login
    if (emailOrUsername === "admin@hmqfa.com" && password === "admin12345") {
      const adminUser = {
        role: "admin",
        email: "admin@hmqfa.com",
        username: "admin",
        fullName: "Admin"
      };
      localStorage.setItem("currentUser", JSON.stringify(adminUser));
      showModal("Welcome Admin!", "success", () => {
        window.location.href = "/admin page/pages/dashboard.html";
      });
      return;
    }

    const user = users.find(
      u =>
        (u.email === emailOrUsername || u.username === emailOrUsername) &&
        u.password === password
    );

    if (!user) {
      showModal("Incorrect username, email, or password.");
      return;
    }

    // Save current logged-in user to localStorage
    localStorage.setItem("currentUser", JSON.stringify(user));

    if (user.role === "admin") {
      showModal(`Welcome Admin, ${user.username}!`, "success", () => {
        window.location.href = "/admin page/pages/dashboard.html";
      });
    } else {
      showModal(`Welcome, ${user.username}!`, "success", () => {
        window.location.href = "index.html";
      });
    }
  });
}

document.querySelectorAll(".toggle-password").forEach(icon => {
  icon.addEventListener("click", function () {
    const wrapper = this.closest(".input-wrapper");
    const input = wrapper.querySelector("input");

    if (input.type === "password") {
      input.type = "text";
      this.src = "../images/show.png";
      this.alt = "Hide password";
    } else {
      input.type = "password";
      this.src = "../images/hide.png";
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

// Header and authentication logic only
// Pet filtering and display is handled by pet.js

// Check if user is logged in and update header
function updateHeader() {
  const currentUserStr = localStorage.getItem("currentUser");
  const currentUser = currentUserStr ? JSON.parse(currentUserStr) : null;
  const loginLink = document.getElementById("login-link");
  const signupLink = document.getElementById("signup-link");
  const loggedInNav = document.getElementById("logged-in-nav");
  const logoutLink = document.getElementById("logout-link");

  if (currentUser) {
    if (loginLink) loginLink.style.display = "none";
    if (signupLink) signupLink.style.display = "none";
    if (loggedInNav) {
      loggedInNav.style.display = "flex";
        const currentPage = window.location.pathname.split('/').pop() || 'pages/index.html';
      const navLinks = loggedInNav.querySelectorAll('a');
      navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
          link.classList.add('active');
        } else if (linkPage !== '#') {
          link.classList.remove('active');
        }
      });
    }
  } else {
    if (loginLink) loginLink.style.display = "inline-block";
    if (signupLink) signupLink.style.display = "inline-block";
    if (loggedInNav) loggedInNav.style.display = "none";
  }
}

// Logout functionality
const logoutLink = document.getElementById("logout-link");
if (logoutLink) {
  logoutLink.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("currentUser");
    showModal("You have been logged out.", "info", () => {
      window.location.href = "index.html";
    });
  });
}

// Update header on page load
updateHeader();
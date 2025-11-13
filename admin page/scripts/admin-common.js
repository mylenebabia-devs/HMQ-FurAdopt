// Shared admin functionality
function checkAdminAuth() {
  const currentUserStr = localStorage.getItem("currentUser");
  const currentUser = currentUserStr ? JSON.parse(currentUserStr) : null;

  if (!currentUser || currentUser.role !== "admin") {
    showModal("Access denied. Admin only.", "info", () => {
      window.location.href = "../user page/pages/login.html";
    });
    return false;
  }
  return true;
}

function initNavbar() {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("currentUser");
      showModal("Logged out successfully.", "info", () => {
        window.location.href = "/user page/pages/login.html";
      });
    });
  }
}

function initSidebar() {
  const currentPage = window.location.pathname.split('/').pop();
  const sidebarBtns = document.querySelectorAll(".sidebar-btn");
  
  sidebarBtns.forEach(btn => {
    const page = btn.dataset.page;
    if (currentPage === page || (currentPage === "dashboard.html" && page === "dashboard")) {
      btn.classList.add("active");
    }
    
    btn.addEventListener("click", () => {
      if (page) {
        window.location.href = page;
      }
    });
  });
}

// Initialize on page load
if (checkAdminAuth()) {
  initNavbar();
  initSidebar();
}


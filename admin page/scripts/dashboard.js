// Dashboard functionality
function loadDashboard() {
  const pets = JSON.parse(localStorage.getItem("petsData")) || [];
  const adoptions = JSON.parse(localStorage.getItem("adoptionForms")) || [];
  const users = JSON.parse(localStorage.getItem("users")) || [];
  
  const totalPetsEl = document.getElementById("totalPets");
  const pendingAdoptionsEl = document.getElementById("pendingAdoptions");
  const totalUsersEl = document.getElementById("totalUsers");
  const approvedAdoptionsEl = document.getElementById("approvedAdoptions");
  
  if (totalPetsEl) totalPetsEl.textContent = pets.length;
  if (pendingAdoptionsEl) pendingAdoptionsEl.textContent = 
    adoptions.filter(a => a.status === "pending").length;
  if (totalUsersEl) totalUsersEl.textContent = users.length;
  if (approvedAdoptionsEl) approvedAdoptionsEl.textContent = 
    adoptions.filter(a => a.status === "approved").length;
}

// Initialize dashboard
document.addEventListener("DOMContentLoaded", loadDashboard);


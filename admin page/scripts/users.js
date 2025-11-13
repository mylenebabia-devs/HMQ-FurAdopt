// Users management functionality
function loadUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const usersList = document.getElementById("usersList");
  
  if (!usersList) return;
  
  if (users.length === 0) {
    usersList.innerHTML = '<p style="text-align: center; color: #666; padding: 40px;">No users registered.</p>';
    return;
  }
  
  usersList.innerHTML = users.map(user => `
    <div class="user-card">
      <h3>${user.fullName || user.username}</h3>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone || "Not provided"}</p>
      <p><strong>Address:</strong> ${user.address || "Not provided"}</p>
    </div>
  `).join("");
}

// Initialize
document.addEventListener("DOMContentLoaded", loadUsers);


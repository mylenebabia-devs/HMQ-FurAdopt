// Adoptions management functionality
let currentStatus = "all";

function loadAdoptions(status = "all") {
  currentStatus = status;
  let adoptions = JSON.parse(localStorage.getItem("adoptionForms")) || [];
  
  if (status !== "all") {
    adoptions = adoptions.filter(a => a.status === status);
  }
  
  const adoptionsList = document.getElementById("adoptionsList");
  if (!adoptionsList) return;
  
  if (adoptions.length === 0) {
    adoptionsList.innerHTML = '<p style="text-align: center; color: #666; padding: 40px;">No adoption forms found.</p>';
    return;
  }
  
  adoptionsList.innerHTML = adoptions.map(adoption => `
    <div class="adoption-card">
      <div class="adoption-card-header">
        <h3>${adoption.applicant.fullName}</h3>
        <span class="status-badge ${adoption.status}">${adoption.status.toUpperCase()}</span>
      </div>
      <div class="adoption-card-info">
        <p><strong>Pet:</strong> ${adoption.pet ? adoption.pet.name : "N/A"}</p>
        <p><strong>Email:</strong> ${adoption.applicant.email}</p>
        <p><strong>Phone:</strong> ${adoption.applicant.phone}</p>
        <p><strong>Submitted:</strong> ${new Date(adoption.submittedAt).toLocaleDateString()}</p>
      </div>
      <div class="adoption-card-actions">
        <button class="btn-primary" onclick="viewAdoption('${adoption.id}')">View Details</button>
      </div>
    </div>
  `).join("");
}

function initFilterTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadAdoptions(btn.dataset.status);
    });
  });
}

function viewAdoption(id) {
  const adoptions = JSON.parse(localStorage.getItem("adoptionForms")) || [];
  const adoption = adoptions.find(a => a.id === id);
  
  if (!adoption) return;
  
  const modal = document.getElementById("viewAdoptionModal");
  const details = document.getElementById("adoptionDetails");
  const actions = document.getElementById("adoptionActions");
  
  if (!modal || !details || !actions) return;
  
  details.innerHTML = `
    <div class="adoption-details">
      <div class="detail-section">
        <h3>Applicant Information</h3>
        <div class="detail-grid">
          <div class="detail-item">
            <label>Full Name</label>
            <p>${adoption.applicant.fullName}</p>
          </div>
          <div class="detail-item">
            <label>Age</label>
            <p>${adoption.applicant.age}</p>
          </div>
          <div class="detail-item">
            <label>Email</label>
            <p>${adoption.applicant.email}</p>
          </div>
          <div class="detail-item">
            <label>Phone</label>
            <p>${adoption.applicant.phone}</p>
          </div>
          <div class="detail-item full-width">
            <label>Address</label>
            <p>${adoption.applicant.address}</p>
          </div>
          <div class="detail-item">
            <label>Occupation</label>
            <p>${adoption.applicant.occupation}</p>
          </div>
        </div>
      </div>
      
      <div class="detail-section">
        <h3>Home Information</h3>
        <div class="detail-grid">
          <div class="detail-item">
            <label>Home Type</label>
            <p>${adoption.homeInfo.homeType}</p>
          </div>
          <div class="detail-item">
            <label>House Type</label>
            <p>${adoption.homeInfo.houseType}</p>
          </div>
          <div class="detail-item">
            <label>Other Pets</label>
            <p>${adoption.homeInfo.otherPets}</p>
          </div>
        </div>
      </div>
      
      <div class="detail-section">
        <h3>Motivation & Care Plan</h3>
        <div class="detail-item full-width">
          <label>Reason for Adoption</label>
          <p>${adoption.motivation.reason}</p>
        </div>
        <div class="detail-item full-width">
          <label>Care Plan</label>
          <p>${adoption.motivation.carePlan}</p>
        </div>
      </div>
      
      ${adoption.pet ? `
      <div class="detail-section">
        <h3>Pet Information</h3>
        <div class="pet-preview-mini">
          <img src="${(() => {
            let imgPath = adoption.pet.image || '';
            // If it's a base64 image, return as-is
            if (imgPath.startsWith('data:image')) {
              return imgPath;
            }
            // Otherwise, normalize file path
            imgPath = imgPath.replace(/%20/g, ' ');
            if (imgPath.startsWith('../../')) imgPath = imgPath.substring(6);
            if (imgPath.startsWith('../')) imgPath = imgPath.substring(3);
            imgPath = imgPath.replace(/^pet images\/pet images\//, 'pet images/');
            if (!imgPath.startsWith('pet images/')) {
              const filename = imgPath.split('/').pop();
              imgPath = `pet images/${filename}`;
            }
            return `../../${imgPath.replace(/ /g, '%20')}`;
          })()}" alt="${adoption.pet.name}" onerror="this.src='../../user%20page/images/pet.jpg'">
          <div>
            <h4>${adoption.pet.name}</h4>
            <p>${adoption.pet.breed} • ${adoption.pet.age}</p>
            <p>Type: ${adoption.pet.type}</p>
          </div>
        </div>
      </div>
      ` : ''}
    </div>
  `;
  
  if (adoption.status === "pending") {
    actions.innerHTML = `
      <button class="btn-success" onclick="updateAdoptionStatus('${adoption.id}', 'approved')">Approve</button>
      <button class="btn-danger" onclick="updateAdoptionStatus('${adoption.id}', 'rejected')">Reject</button>
      <button class="btn-secondary" onclick="closeAdoptionModal()">Close</button>
    `;
  } else {
    actions.innerHTML = `
      <button class="btn-secondary" onclick="closeAdoptionModal()">Close</button>
    `;
  }
  
  modal.classList.add("active");
}

function closeAdoptionModal() {
  const modal = document.getElementById("viewAdoptionModal");
  if (modal) modal.classList.remove("active");
}

function updateAdoptionStatus(id, status) {
  let adoptions = JSON.parse(localStorage.getItem("adoptionForms")) || [];
  const index = adoptions.findIndex(a => a.id === id);
  
  if (index !== -1) {
    adoptions[index].status = status;
    adoptions[index].reviewedAt = new Date().toISOString();
    localStorage.setItem("adoptionForms", JSON.stringify(adoptions));
    
    // Remove pet from pets list when adoption is approved
    if (status === "approved" && adoptions[index].pet) {
      let pets = JSON.parse(localStorage.getItem("petsData")) || [];
      pets = pets.filter(p => p.name !== adoptions[index].pet.name);
      localStorage.setItem("petsData", JSON.stringify(pets));
    }
    
    closeAdoptionModal();
    loadAdoptions(currentStatus);
    showModal(`Adoption ${status} successfully!`, "success");
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadAdoptions();
  initFilterTabs();
  
  const closeBtn = document.querySelector("#viewAdoptionModal .close");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeAdoptionModal);
  }
});

// Close modal on outside click
window.addEventListener("click", (e) => {
  const modal = document.getElementById("viewAdoptionModal");
  if (e.target.classList.contains("modal") && modal) {
    modal.classList.remove("active");
  }
});


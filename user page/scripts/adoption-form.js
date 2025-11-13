// Back button functionality
const backBtn = document.getElementById("backBtn");
  if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

// Check if user is logged in
const currentUserStr = localStorage.getItem("currentUser");
const currentUser = currentUserStr ? JSON.parse(currentUserStr) : null;
if (!currentUser) {
  showModal("Please log in to access the adoption form.", "info", () => {
    window.location.href = "login.html";
  });
}

// Load selected pet
const petStr = localStorage.getItem("selectedPet");
const pet = petStr ? JSON.parse(petStr) : null;

if (pet) {
  const typeDisplay = pet.type ? pet.type.charAt(0).toUpperCase() + pet.type.slice(1) : "Pet";
  
  document.getElementById("petPreviewName").textContent = pet.name;
  document.getElementById("petPreviewBreed").textContent = pet.breed || "Not specified";
  document.getElementById("petPreviewAge").textContent = pet.age || "Not specified";
  document.getElementById("petPreviewType").textContent = typeDisplay;
  document.getElementById("petPreviewImage").src = pet.image;
  
  // Additional pet information
  const genderEl = document.getElementById("petPreviewGender");
  const sizeEl = document.getElementById("petPreviewSize");
  const descEl = document.getElementById("petPreviewDescription");
  const traitsEl = document.getElementById("petPreviewTraits");
  
  if (genderEl) genderEl.textContent = pet.gender || "Not specified";
  if (sizeEl) sizeEl.textContent = pet.size || "Not specified";
  if (descEl) descEl.textContent = pet.description || "No description available.";
  
  // Display traits
  if (traitsEl && pet.traits && pet.traits.length > 0) {
    traitsEl.innerHTML = pet.traits.map(trait => 
      `<span class="trait-tag">${trait}</span>`
    ).join("");
  } else if (traitsEl) {
    traitsEl.innerHTML = '<span class="trait-tag">No traits listed</span>';
  }
} else {
  showModal("No pet selected. Redirecting to home page.", "info", () => {
    window.location.href = "index.html";
  });
}

// Pre-fill form with user information
if (currentUser) {
  const fullNameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const addressInput = document.getElementById("address");

  if (fullNameInput) fullNameInput.value = currentUser.fullName || currentUser.name || "";
  if (emailInput) emailInput.value = currentUser.email || "";
  if (phoneInput) phoneInput.value = currentUser.phone || "";
  if (addressInput) addressInput.value = currentUser.address || "";
}

// Helper function to calculate age from birthday
function calculateAge(birthday) {
  const today = new Date();
  const birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// Form submission
const adoptionForm = document.getElementById("adoptionForm");
if (adoptionForm) {
  adoptionForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = {
      id: Date.now().toString(),
      status: "pending",
      submittedAt: new Date().toISOString(),
      applicant: {
        fullName: document.getElementById("fullName").value,
        age: currentUser && currentUser.birthday ? calculateAge(currentUser.birthday) : null,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        occupation: document.getElementById("occupation").value || "Not specified"
      },
      homeInfo: {
        homeType: document.getElementById("homeType").value,
        houseType: document.getElementById("houseType").value,
        otherPets: document.getElementById("otherPets").value
      },
      motivation: {
        reason: document.getElementById("reason").value,
        carePlan: document.getElementById("carePlan").value
      },
      pet: pet ? {
        name: pet.name,
        breed: pet.breed,
        age: pet.age,
        type: pet.type,
        image: pet.image
      } : null,
      userId: currentUser ? currentUser.email : null
    };

    // Save to localStorage
    let adoptionForms = JSON.parse(localStorage.getItem("adoptionForms")) || [];
    adoptionForms.push(formData);
    localStorage.setItem("adoptionForms", JSON.stringify(adoptionForms));

    showModal("Adoption application submitted successfully! We will review your application soon.", "success", () => {
      window.location.href = "index.html";
    });
  });
}

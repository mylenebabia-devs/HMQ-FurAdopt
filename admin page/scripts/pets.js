// Pets management functionality
function loadPets() {
  const pets = JSON.parse(localStorage.getItem("petsData")) || [];
  const petsList = document.getElementById("petsList");
  
  if (!petsList) return;
  
  if (pets.length === 0) {
    petsList.innerHTML = '<p style="text-align: center; color: #666; padding: 40px;">No pets available.</p>';
    return;
  }
  
  petsList.innerHTML = pets.map((pet, index) => {
    // Check if image is base64 (starts with data:image)
    let imageSrc = pet.image || '';
    if (!imageSrc.startsWith('data:image')) {
      // Handle file path images (backward compatibility)
      let imagePath = imageSrc;
      // Decode URL encoding if present
      imagePath = imagePath.replace(/%20/g, ' ');
      if (imagePath.startsWith('../../')) {
        imagePath = imagePath.substring(6); // Remove ../../ prefix
      } else if (imagePath.startsWith('../')) {
        imagePath = imagePath.substring(3); // Remove ../ prefix
      }
      // Remove 'pet images/' if it's duplicated
      imagePath = imagePath.replace(/^pet images\/pet images\//, 'pet images/');
      // Ensure it starts with 'pet images/'
      if (!imagePath.startsWith('pet images/')) {
        const filename = imagePath.split('/').pop();
        imagePath = `pet images/${filename}`;
      }
      // URL encode the space in folder name
      imageSrc = `../../${imagePath.replace(/ /g, '%20')}`;
    }
    
    return `
    <div class="pet-card-admin">
      <img src="${imageSrc}" alt="${pet.name}" onerror="this.src='../../user page/images/pet.jpg'">
      <div class="pet-info">
        <h3>${pet.name}</h3>
        <p><strong>Breed:</strong> ${pet.breed}</p>
        <p><strong>Age:</strong> ${pet.age}</p>
        <p><strong>Type:</strong> ${pet.type}</p>
        <div class="pet-actions">
          <button class="btn-primary" onclick="editPet(${index})">Edit</button>
          <button class="btn-danger" onclick="deletePet('${pet.name}')">Delete</button>
        </div>
      </div>
    </div>
  `;
  }).join("");
}

function deletePet(petName) {
  if (!confirm(`Are you sure you want to delete ${petName}?`)) return;
  
  let pets = JSON.parse(localStorage.getItem("petsData")) || [];
  pets = pets.filter(p => p.name !== petName);
  localStorage.setItem("petsData", JSON.stringify(pets));
  loadPets();
  showModal("Pet deleted successfully.", "success");
}

function editPet(index) {
  const pets = JSON.parse(localStorage.getItem("petsData")) || [];
  const pet = pets[index];
  
  if (!pet) return;
  
  // Populate form with pet data
  document.getElementById("petName").value = pet.name || "";
  document.getElementById("petBreed").value = pet.breed || "";
  document.getElementById("petAge").value = pet.age || "";
  document.getElementById("petType").value = pet.type || "";
  document.getElementById("petGender").value = pet.gender || "";
  document.getElementById("petSize").value = pet.size || "";
  document.getElementById("petDescription").value = pet.description || "";
  document.getElementById("petTraits").value = pet.traits ? pet.traits.join(", ") : "";
  
  // Handle image - show preview if base64, or clear if file path
  const imagePreview = document.getElementById("petImagePreview");
  const imagePreviewImg = document.getElementById("petImagePreviewImg");
  const imageFileName = document.getElementById("petImageFileName");
  const imageUpload = document.getElementById("petImageUpload");
  
  // Always store current image in dataset for form submission (even if file path)
  if (pet.image) {
    imageUpload.dataset.currentImage = pet.image;
    
    if (pet.image.startsWith('data:image')) {
      // Base64 image - show preview
      imagePreviewImg.src = pet.image;
      imagePreview.style.display = "block";
      imageFileName.textContent = "Current image (click to change)";
    } else {
      // File path image - try to show preview if possible
      imagePreviewImg.src = pet.image;
      imagePreview.style.display = "block";
      imageFileName.textContent = "Current image (click to change)";
    }
  } else {
    // No image - clear preview
    imagePreview.style.display = "none";
    imageFileName.textContent = "";
    imageUpload.dataset.currentImage = "";
  }
  imageUpload.value = ""; // Clear file input
  
  // Change form to edit mode
  const modal = document.getElementById("addPetModal");
  const formTitle = modal.querySelector("h2");
  const submitBtn = modal.querySelector("button[type='submit']");
  const form = document.getElementById("addPetForm");
  
  formTitle.textContent = "Edit Pet";
  submitBtn.textContent = "Update Pet";
  form.dataset.editIndex = index;
  
  modal.classList.add("active");
}

function initAddPetModal() {
  const addPetModal = document.getElementById("addPetModal");
  const addPetBtn = document.getElementById("addPetBtn");
  const cancelPetBtn = document.getElementById("cancelPetBtn");
  const addPetForm = document.getElementById("addPetForm");
  const closeBtn = document.querySelector("#addPetModal .close");
  const uploadPetImageBtn = document.getElementById("uploadPetImageBtn");
  const petImageUpload = document.getElementById("petImageUpload");
  const petImagePreview = document.getElementById("petImagePreview");
  const petImagePreviewImg = document.getElementById("petImagePreviewImg");
  const petImageFileName = document.getElementById("petImageFileName");

  // Image upload button click handler
  if (uploadPetImageBtn) {
    uploadPetImageBtn.addEventListener("click", () => {
      petImageUpload.click();
    });
  }

  // File input change handler
  if (petImageUpload) {
    petImageUpload.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          showModal("Image size must be less than 5MB.", "error");
          return;
        }
        
        // Check file type
        if (!file.type.startsWith('image/')) {
          showModal("Please select a valid image file.", "error");
          return;
        }
        
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageBase64 = event.target.result;
          petImagePreviewImg.src = imageBase64;
          petImagePreview.style.display = "block";
          petImageFileName.textContent = file.name;
          // Store base64 in dataset for form submission
          petImageUpload.dataset.currentImage = imageBase64;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (addPetBtn) {
    addPetBtn.addEventListener("click", () => {
      if (addPetModal) {
        // Reset form for add mode
        const formTitle = addPetModal.querySelector("h2");
        const submitBtn = addPetModal.querySelector("button[type='submit']");
        if (formTitle) formTitle.textContent = "Add New Pet";
        if (submitBtn) submitBtn.textContent = "Add Pet";
        if (addPetForm) {
          addPetForm.reset();
          delete addPetForm.dataset.editIndex;
        }
        // Reset image preview
        petImagePreview.style.display = "none";
        petImageFileName.textContent = "";
        if (petImageUpload) {
          petImageUpload.value = "";
          delete petImageUpload.dataset.currentImage;
        }
        addPetModal.classList.add("active");
      }
    });
  }

  if (cancelPetBtn) {
    cancelPetBtn.addEventListener("click", () => {
      if (addPetModal) addPetModal.classList.remove("active");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      if (addPetModal) addPetModal.classList.remove("active");
    });
  }

  if (addPetForm) {
    addPetForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      let pets = JSON.parse(localStorage.getItem("petsData")) || [];
      const editIndex = addPetForm.dataset.editIndex;
      
      // Get image - handle both add and edit modes
      let petImage = "";
      if (petImageUpload && petImageUpload.dataset.currentImage) {
        // New image uploaded or existing image in edit mode
        petImage = petImageUpload.dataset.currentImage;
      } else if (editIndex !== undefined) {
        // Edit mode - no new image uploaded, use existing pet's image
        const existingPet = pets[editIndex];
        petImage = existingPet.image || "";
        if (!petImage) {
          showModal("Please select an image.", "error");
          return;
        }
      } else {
        // Add mode - image is required
        showModal("Please select an image.", "error");
        return;
      }
      
      const traits = document.getElementById("petTraits").value
        ? document.getElementById("petTraits").value.split(",").map(t => t.trim())
        : [];
      
      const petData = {
        name: document.getElementById("petName").value,
        breed: document.getElementById("petBreed").value,
        age: document.getElementById("petAge").value,
        type: document.getElementById("petType").value,
        gender: document.getElementById("petGender").value || undefined,
        size: document.getElementById("petSize").value || undefined,
        image: petImage,
        description: document.getElementById("petDescription").value,
        traits: traits,
        healthStatus: "Good",
        vaccinations: []
      };
      
      if (editIndex !== undefined) {
        // Edit mode - preserve existing healthStatus and vaccinations
        const existingPet = pets[editIndex];
        pets[editIndex] = {
          ...petData,
          healthStatus: existingPet.healthStatus || "Good",
          vaccinations: existingPet.vaccinations || []
        };
        showModal("Pet updated successfully!", "success");
      } else {
        // Add mode
        pets.push(petData);
        showModal("Pet added successfully!", "success");
      }
      
      localStorage.setItem("petsData", JSON.stringify(pets));
      
      // Reset form
      const modal = document.getElementById("addPetModal");
      const formTitle = modal.querySelector("h2");
      const submitBtn = modal.querySelector("button[type='submit']");
      
      formTitle.textContent = "Add New Pet";
      submitBtn.textContent = "Add Pet";
      delete addPetForm.dataset.editIndex;
      
      // Reset image preview
      petImagePreview.style.display = "none";
      petImageFileName.textContent = "";
      if (petImageUpload) {
        petImageUpload.value = "";
        delete petImageUpload.dataset.currentImage;
      }
      
      if (addPetModal) addPetModal.classList.remove("active");
      loadPets();
    });
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadPets();
  initAddPetModal();
});

// Close modal on outside click
window.addEventListener("click", (e) => {
  const addPetModal = document.getElementById("addPetModal");
  if (e.target.classList.contains("modal") && addPetModal) {
    addPetModal.classList.remove("active");
  }
});


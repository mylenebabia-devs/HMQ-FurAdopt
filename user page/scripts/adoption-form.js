const pet = JSON.parse(localStorage.getItem("selectedPet"));

if (pet) {
  document.getElementById("petName").textContent = pet.name;
  document.getElementById("petBreed").textContent = `Breed: ${pet.breed}`;
  document.getElementById("petAge").textContent = `Age: ${pet.age}`;
  document.getElementById("petType").textContent = `Type: ${pet.type}`;
  document.getElementById("petImage").src = pet.image;
}

const form = document.getElementById("adoptionForm");
let applications = JSON.parse(localStorage.getItem("adoptionApplications")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const application = {
    petName: pet ? pet.name : "Unknown",
    fullName: form.fullName.value.trim(),
    age: form.age.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    address: form.address.value.trim(),
    occupation: form.occupation.value.trim(),
    homeType: form.homeType.value,
    houseType: form.houseType.value,
    otherPets: form.otherPets.value,
    reason: form.reason.value.trim(),
    carePlan: form.carePlan.value.trim(),
    dateSubmitted: new Date().toLocaleString(),
  };

  applications.push(application);
  localStorage.setItem("adoptionApplications", JSON.stringify(applications));

  alert(`Your adoption application for ${application.petName} has been submitted successfully! 🐾`);
  
  form.reset();
  localStorage.removeItem("selectedPet"); 
  window.location.href = "home.html";
});

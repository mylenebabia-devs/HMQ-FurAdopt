// Retrieve selected pet data from localStorage (if clicked from home page)
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
    fullName: form.fullName.value,
    age: form.age.value,
    email: form.email.value,
    phone: form.phone.value,
    address: form.address.value,
    occupation: form.occupation.value,
    homeType: form.homeType.value,
    houseType: form.houseType.value,
    otherPets: form.otherPets.value,
    reason: form.reason.value,
    carePlan: form.carePlan.value,
    dateSubmitted: new Date().toLocaleString(),
  };

  applications.push(application);
  localStorage.setItem("adoptionApplications", JSON.stringify(applications));

  alert("Your adoption application has been submitted successfully! 🐾");
  form.reset();
  window.location.href = "home.html";
});

const pet = JSON.parse(localStorage.getItem("selectedPet"));

if (pet) {
  document.getElementById("petPreviewName").textContent = pet.name;
  document.getElementById("petPreviewBreed").textContent = `Breed: ${pet.breed}`;
  document.getElementById("petPreviewAge").textContent = `Age: ${pet.age}`;
  document.getElementById("petPreviewType").textContent = `Type: ${pet.type}`;
  document.getElementById("petPreviewImage").src = pet.image;
}

   const pets = [
  { name: "Buddy", breed: "Golden Retriever", age: "3 years old", image: "images/buddy.jpg", type: "dog" },
  { name: "Cotton", breed: "Holland Lop", age: "1 year old", image: "images/cotton.jpg", type: "rabbit" },
  { name: "Rocky", breed: "Beagle", age: "4 years old", image: "images/rocky.jpg", type: "dog" },
  { name: "Margarette", breed: "Persian Cat", age: "2 years old", image: "images/margarette.jpg", type: "cat" },
  { name: "Mochi", breed: "English Lop", age: "4.5 years old", image: "images/mochi.jpg", type: "rabbit" },
  { name: "Cosmo", breed: "Puspin Ginger Cat", age: "2 years old", image: "images/cosmo.JPG", type: "cat" },
  { name: "Chuckie", breed: "Green Quaker Parrot", age: "2 years old", image: "images/chuckie.jpg", type: "parrot" },
  { name: "Peanut", breed: "Syrian Hamster", age: "1 year old", image: "images/peanut.png", type: "hamster" },
  { name: "Daffy", breed: "Cockatoo Parrot", age: "1 year old", image: "images/daffy.png", type: "parrot" },
  { name: "Winter", breed: "White Dwarf Hamster", age: "2 years old", image: "images/winter.png", type: "hamster" },
  { name: "Muffin", breed: "Teddy Guinea Pig", age: "1 year old", image: "images/muffin.png", type: "guinea pig" },
  { name: "Maggie", breed: "Texel Guinea Pig", age: "9 months old", image: "images/maggie.png", type: "guinea pig" },

  { name: "Bruno", breed: "Rottweiler", age: "3 years old", image: "images/bruno.jpg", type: "dog" },
  { name: "Choco", breed: "Aspin", age: "2 years old", image: "images/choco.jpg", type: "dog" },
  { name: "Tisay", breed: "Shih Tzu", age: "1 year old", image: "images/tisay.jpg", type: "dog" },
  { name: "Bunso", breed: "Syrian Hamster", age: "4 months old", image: "images/bunso.jpg", type: "hamster" },
  { name: "Tala", breed: "Winter White Hamster", age: "4 months old", image: "images/tala.jpg", type: "hamster" },
  { name: "Luna", breed: "Dwarf Hamster", age: "3 months old", image: "images/luna.jpg", type: "hamster" },
  { name: "Tonton", breed: "Mini Rex", age: "5 months old", image: "images/tonton.jpg", type: "rabbit" },
  { name: "Nene", breed: "Mini Lop", age: "4 months old", image: "images/nene.jpg", type: "rabbit" },
  { name: "Inday", breed: "Dutch Rabbit", age: "6 months old", image: "images/inday.jpg", type: "rabbit" },
  { name: "Sunny", breed: "Sun Conure", age: "2 years old", image: "images/sunny.jpg", type: "parrot" },
  { name: "Mango", breed: "Budgie", age: "1 year old", image: "images/mango.jpg", type: "parrot" },
  { name: "Tuki", breed: "Amazon Parrot", age: "5 years old", image: "images/tuki.jpg", type: "parrot" },
  { name: "Bubu", breed: "American Guinea Pig", age: "1 year old", image: "images/bubu.jpg", type: "guinea pig" },
  { name: "Pochi", breed: "Teddy Guinea Pig", age: "1 year old", image: "images/pochi.jpg", type: "guinea pig" },
  { name: "Bubbles", breed: "Ragdoll", age: "1 year old", image: "images/bubbles.jpg", type: "cat" },
  { name: "Boots", breed: "American Short Hair", age: "9 months old", image: "images/boots.jpg", type: "cat" },
  { name: "Chilly", breed: "Devon Rex", age: "1 year 3 months old", image: "images/chilly.jpg", type: "cat" },
]
const petsContainer = document.getElementById("pets-container");
const search = document.getElementById("search-bar");
const filterIcon = document.getElementById("filter-icon");
const filterDropdown = document.getElementById("filter-dropdown");
const searchContainer = document.querySelector(".search-container");

function displayPets(petList) {
  petsContainer.innerHTML = "";
  petList.forEach(pet => {
    const card = document.createElement("div");
    card.classList.add("pet-card");
    card.innerHTML = `
      <img src="${pet.image}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Breed: ${pet.breed}</p>
      <p>Age: ${pet.age}</p>
      <button class="details-btn">See more details</button>
      <button class="adopt-btn">Adopt Me</button>
    `;
    petsContainer.appendChild(card);

    card.querySelector(".adopt-btn").addEventListener("click", () => {
      localStorage.setItem("selectedPet", JSON.stringify(pet));
      window.location.href = "adoption-form.html";
    });
  });
}

displayPets(pets);

search.addEventListener("keyup", () => {
  const text = search.value.toLowerCase();
  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(text) ||
    pet.breed.toLowerCase().includes(text) ||
    pet.type.toLowerCase().includes(text)
  );
  displayPets(filteredPets);

  if (text.trim() !== "") {
    searchContainer.classList.add("show-filter");
  } else {
    searchContainer.classList.remove("show-filter");
    filterDropdown.classList.add("hidden");
  }
});

filterIcon.addEventListener("click", () => {
  filterDropdown.classList.toggle("hidden");
});

filterDropdown.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const filterType = e.target.dataset.filter;
    let filteredPets = [];

    if (filterType === "all") {
      filteredPets = pets;
    } else {
      filteredPets = pets.filter(pet => pet.type === filterType);
    }

    displayPets(filteredPets);
    filterDropdown.classList.add("hidden");
  }
});

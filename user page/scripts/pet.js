    // Default pets data
    const defaultPets = [
      { 
        name: "Luna", 
        breed: "Golden Retriever", 
        age: "2 years old", 
        image: "../../pet%20images/luna.jpg", 
        type: "dog",
        gender: "Female",
        size: "Large",
        color: "Golden",
        healthStatus: "Excellent",
        vaccinations: [
          { name: "Rabies", last: "10/15/2024", next: "10/15/2025" },
          { name: "DHPP", last: "9/20/2024", next: "9/20/2025" }
        ],
        description: "Luna is a friendly and energetic Golden Retriever who loves to play fetch and go on long walks.",
        traits: ["Friendly", "Energetic", "Loyal"]
      },
      { 
        name: "Whiskers", 
        breed: "Persian", 
        age: "1 year old", 
        image: "../../pet%20images/margarette.jpg", 
        type: "cat",
        gender: "Female",
        size: "Medium",
        color: "White",
        healthStatus: "Excellent",
        vaccinations: [
          { name: "Rabies", last: "8/10/2024", next: "8/10/2025" },
          { name: "FVRCP", last: "7/15/2024", next: "7/15/2025" }
        ],
        description: "Whiskers is a calm and affectionate Persian cat who enjoys cuddling and quiet environments.",
        traits: ["Calm", "Affectionate", "Quiet"]
      },
      { 
        name: "Buddy", 
        breed: "Beagle", 
        age: "3 years old", 
        image: "../../pet%20images/buddy.jpg", 
        type: "dog",
        description: "Buddy is a curious and adventurous Beagle who loves exploring and following scents.",
        traits: ["Curious", "Adventurous", "Friendly"]
      },
      { 
        name: "Mittens", 
        breed: "Siamese", 
        age: "2 years old", 
        image: "../../pet%20images/cosmo.JPG", 
        type: "cat",
        description: "Mittens is a talkative and social Siamese who loves attention and interactive play.",
        traits: ["Talkative", "Social", "Intelligent"]
      },
      { 
        name: "Cotton", 
        breed: "Holland Lop", 
        age: "1 year old", 
        image: "../../pet%20images/cotton.jpg", 
        type: "rabbit",
        description: "Cotton is a gentle and playful rabbit who enjoys hopping around and munching on fresh vegetables.",
        traits: ["Gentle", "Playful", "Calm"]
      },
      { 
        name: "Rocky", 
        breed: "Beagle", 
        age: "4 years old", 
        image: "../../pet%20images/rocky.jpg", 
        type: "dog",
        description: "Rocky is a loyal and protective companion who loves outdoor activities and family time.",
        traits: ["Loyal", "Protective", "Active"]
      },
      { 
        name: "Mochi", 
        breed: "English Lop", 
        age: "4.5 years old", 
        image: "../../pet%20images/mochi.jpg", 
        type: "rabbit",
        description: "Mochi is a sweet and docile rabbit with floppy ears who loves being petted and cuddled.",
        traits: ["Sweet", "Docile", "Affectionate"]
      },
      { 
        name: "Chuckie", 
        breed: "Green Quaker Parrot", 
        age: "2 years old", 
        image: "../../pet%20images/chuckie.jpg", 
        type: "bird",
        description: "Chuckie is an intelligent and vocal parrot who loves to mimic sounds and interact with people.",
        traits: ["Intelligent", "Vocal", "Social"]
      },
      { 
        name: "Peanut", 
        breed: "Syrian Hamster", 
        age: "1 year old", 
        image: "../../pet%20images/peanut.png", 
        type: "hamster",
        description: "Peanut is a curious and active hamster who loves running on wheels and exploring tunnels.",
        traits: ["Curious", "Active", "Playful"]
      },
      { 
        name: "Daffy", 
        breed: "Cockatoo Parrot", 
        age: "1 year old", 
        image: "../../pet%20images/daffy.png", 
        type: "bird",
        description: "Daffy is a friendly and energetic cockatoo who loves dancing and showing off tricks.",
        traits: ["Friendly", "Energetic", "Playful"]
      },
      { 
        name: "Winter", 
        breed: "White Dwarf Hamster", 
        age: "2 years old", 
        image: "../../pet%20images/winter.png", 
        type: "hamster",
        description: "Winter is a gentle and calm hamster with a beautiful white coat who enjoys quiet moments.",
        traits: ["Gentle", "Calm", "Quiet"]
      },
      { 
        name: "Muffin", 
        breed: "Teddy Guinea Pig", 
        age: "1 year old", 
        image: "../../pet%20images/muffin.png", 
        type: "guinea pig",
        description: "Muffin is a fluffy and sociable guinea pig who loves being around people and other pets.",
        traits: ["Fluffy", "Sociable", "Friendly"]
      },
      { 
        name: "Maggie", 
        breed: "Texel Guinea Pig", 
        age: "9 months old", 
        image: "../../pet%20images/maggie.png", 
        type: "guinea pig",
        description: "Maggie is a playful and curious guinea pig with curly fur who loves exploring and playing.",
        traits: ["Playful", "Curious", "Energetic"]
      },
      { 
        name: "Inday", 
        breed: "Mixed Breed", 
        age: "2 years old", 
        image: "../../pet%20images/inday.jpg", 
        type: "dog",
        description: "Inday is a sweet and loving companion who enjoys spending time with family and going on adventures.",
        traits: ["Sweet", "Loving", "Friendly"]
      },
      { 
        name: "Tisay", 
        breed: "Mixed Breed", 
        age: "3 years old", 
        image: "../../pet%20images/tisay.jpg", 
        type: "dog",
        description: "Tisay is an energetic and playful dog who loves running around and playing fetch.",
        traits: ["Energetic", "Playful", "Active"]
      },
      { 
        name: "Choco", 
        breed: "Mixed Breed", 
        age: "1.5 years old", 
        image: "../../pet%20images/choco.jpg", 
        type: "dog",
        description: "Choco is a friendly and affectionate dog with a beautiful chocolate-colored coat who loves cuddles.",
        traits: ["Friendly", "Affectionate", "Calm"]
      },
      { 
        name: "Bruno", 
        breed: "Mixed Breed", 
        age: "2.5 years old", 
        image: "../../pet%20images/bruno.jpg", 
        type: "dog",
        description: "Bruno is a loyal and protective companion who is great with families and loves outdoor activities.",
        traits: ["Loyal", "Protective", "Active"]
      },
      { 
        name: "Bunso", 
        breed: "Mixed Breed", 
        age: "1 year old", 
        image: "../../pet%20images/bunso.jpg", 
        type: "dog",
        description: "Bunso is a playful and curious young dog who loves exploring and learning new tricks.",
        traits: ["Playful", "Curious", "Energetic"]
      },
      { 
        name: "Tala", 
        breed: "Mixed Breed", 
        age: "2 years old", 
        image: "../../pet%20images/tala.jpg", 
        type: "dog",
        description: "Tala is a gentle and friendly dog who enjoys quiet moments and gentle walks in the park.",
        traits: ["Gentle", "Friendly", "Calm"]
      },
      { 
        name: "Tonton", 
        breed: "Mixed Breed", 
        age: "3 years old", 
        image: "../../pet%20images/tonton.jpg", 
        type: "dog",
        description: "Tonton is a cheerful and sociable dog who loves meeting new people and playing with other dogs.",
        traits: ["Cheerful", "Sociable", "Friendly"]
      },
      { 
        name: "Nene", 
        breed: "Mixed Breed", 
        age: "1.5 years old", 
        image: "../../pet%20images/nene.jpg", 
        type: "dog",
        description: "Nene is a sweet and affectionate companion who loves being around people and receiving attention.",
        traits: ["Sweet", "Affectionate", "Loving"]
      },
      { 
        name: "Sunny", 
        breed: "Mixed Breed", 
        age: "2 years old", 
        image: "../../pet%20images/sunny.jpg", 
        type: "dog",
        description: "Sunny is a bright and energetic dog with a sunny personality who brings joy to everyone around.",
        traits: ["Bright", "Energetic", "Joyful"]
      },
      { 
        name: "Mango", 
        breed: "Mixed Breed", 
        age: "1 year old", 
        image: "../../pet%20images/mango.jpg", 
        type: "dog",
        description: "Mango is a sweet and playful dog who loves treats and enjoys playing games with their family.",
        traits: ["Sweet", "Playful", "Energetic"]
      },
      { 
        name: "Tuki", 
        breed: "Mixed Breed", 
        age: "2.5 years old", 
        image: "../../pet%20images/tuki.jpg", 
        type: "dog",
        description: "Tuki is a friendly and loyal companion who enjoys long walks and spending quality time with family.",
        traits: ["Friendly", "Loyal", "Active"]
      },
      { 
        name: "Bubu", 
        breed: "Mixed Breed", 
        age: "1.5 years old", 
        image: "../../pet%20images/bubu.jpg", 
        type: "dog",
        description: "Bubu is a gentle and calm dog who loves relaxing and enjoying peaceful moments with their family.",
        traits: ["Gentle", "Calm", "Affectionate"]
      },
      { 
        name: "Bubbles", 
        breed: "Mixed Breed", 
        age: "2 years old", 
        image: "../../pet%20images/bubbles.jpg", 
        type: "dog",
        description: "Bubbles is an energetic and playful dog who loves running around and playing with toys.",
        traits: ["Energetic", "Playful", "Active"]
      },
      { 
        name: "Pochi", 
        breed: "Mixed Breed", 
        age: "3 years old", 
        image: "../../pet%20images/pochi.jpg", 
        type: "dog",
        description: "Pochi is a friendly and sociable dog who loves meeting new people and making new friends.",
        traits: ["Friendly", "Sociable", "Cheerful"]
      },
      { 
        name: "Boots", 
        breed: "Mixed Breed", 
        age: "2 years old", 
        image: "../../pet%20images/boots.jpg", 
        type: "dog",
        description: "Boots is a loyal and protective companion who enjoys outdoor adventures and family activities.",
        traits: ["Loyal", "Protective", "Adventurous"]
      },
      { 
        name: "Chilly", 
        breed: "Mixed Breed", 
        age: "1.5 years old", 
        image: "../../pet%20images/chilly.jpg", 
        type: "dog",
        description: "Chilly is a cool and calm dog who loves relaxing and enjoying quiet moments with their family.",
        traits: ["Cool", "Calm", "Gentle"]
      },
    ];

    // Normalize pet image path (only for file paths, not base64)
    function normalizeImagePath(imagePath) {
      if (!imagePath) return '';
      // If it's a base64 image, return as-is
      if (imagePath.startsWith('data:image')) {
        return imagePath;
      }
      // Decode URL encoding to work with raw path
      let path = imagePath.replace(/%20/g, ' ');
      // Remove duplicate 'pet images/' segments
      path = path.replace(/pet images\/pet images\//g, 'pet images/');
      // Remove any existing ../../ or ../ prefixes
      if (path.startsWith('../../')) {
        path = path.substring(6);
      } else if (path.startsWith('../')) {
        path = path.substring(3);
      }
      // Ensure it starts with 'pet images/'
      if (!path.startsWith('pet images/')) {
        const filename = path.split('/').pop();
        path = `pet images/${filename}`;
      }
      // Return with ../../ prefix and URL encode space
      return `../../${path.replace(/ /g, '%20')}`;
    }

    // Load pets from localStorage or use default
    function loadPets() {
      const storedPets = JSON.parse(localStorage.getItem("petsData"));
      if (storedPets && storedPets.length > 0) {
        // Normalize image paths only for file paths (not base64)
        const normalizedPets = storedPets.map(pet => ({
          ...pet,
          image: normalizeImagePath(pet.image)
        }));
        // Save normalized paths back to localStorage
        localStorage.setItem("petsData", JSON.stringify(normalizedPets));
        return normalizedPets;
      }
      // Only set defaults if no pets exist
      localStorage.setItem("petsData", JSON.stringify(defaultPets));
      return defaultPets;
    }

    // Get pets
    const pets = loadPets();

    const petsContainer = document.getElementById("pets-container");
    const search = document.getElementById("search-bar");
    const categoryButtons = document.querySelectorAll(".category-btn");
    const filterBtn = document.getElementById("filterBtn") || document.querySelector(".available-only-btn");

    function getTypeDisplay(type) {
      const typeMap = {
        "dog": "Dog",
        "cat": "Cat",
        "rabbit": "Rabbit",
        "hamster": "Hamster",
        "parrot": "Bird",
        "bird": "Bird",
        "guinea pig": "Other"
      };
      return typeMap[type] || "Other";
    }

    function showPetDetailsModal(pet) {
      // Remove existing modal if any
      const existingModal = document.getElementById('petDetailsModal');
      if (existingModal) {
        existingModal.remove();
      }

      const typeDisplay = getTypeDisplay(pet.type);
      const traitsHTML = pet.traits.map(trait => 
        `<span style="display: inline-block; background: linear-gradient(135deg, #f9decd 0%, #e8c9b0 100%); color: #663922; padding: 6px 14px; border-radius: 20px; font-size: 13px; margin: 4px; font-weight: 500; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">${trait}</span>`
      ).join("");

      // Generate vaccinations HTML
      const vaccinationsHTML = pet.vaccinations ? pet.vaccinations.map(vacc => `
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
          <span style="color: #663922; font-weight: 600; min-width: 60px;">${vacc.name}:</span>
          <span style="color: #5a3b28; font-size: 14px;">Last: ${vacc.last} | Next: ${vacc.next}</span>
        </div>
      `).join("") : "<p style='color: #5a3b28; font-size: 14px;'>No vaccination records available.</p>";

      // Get pet details with defaults
      const gender = pet.gender || "Not specified";
      const size = pet.size || "Not specified";
      const color = pet.color || "Not specified";
      const healthStatus = pet.healthStatus || "Good";

      // Create modal overlay
      const modal = document.createElement('div');
      modal.id = 'petDetailsModal';
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
        padding: 20px;
      `;

      // Create modal content
      const modalContent = document.createElement('div');
      modalContent.style.cssText = `
        background: linear-gradient(180deg, #ffffff 0%, #f9decd 100%);
        border-radius: 24px;
        padding: 0;
        max-width: 700px;
        width: 100%;
        max-height: 90vh;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(224, 193, 161, 0.2);
        animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        display: flex;
        flex-direction: column;
      `;

      modalContent.innerHTML = `
        <div style="position: relative; background: linear-gradient(135deg, #f9decd 0%, #e8c9b0 100%); padding: 30px 30px 20px; text-align: center; border-bottom: 2px solid rgba(224, 193, 161, 0.3);">
          <button id="closePetModalX" style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.9); border: none; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; font-size: 20px; color: #663922; display: flex; align-items: center; justify-content: center; transition: 0.3s; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">×</button>
          <div style="width: 220px; height: 220px; margin: 0 auto 20px; position: relative;">
            <img src="${pet.image}" alt="${pet.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 8px 24px rgba(0,0,0,0.15);">
            <div style="position: absolute; bottom: -12px; left: 50%; transform: translateX(-50%); background: #d2691e; color: #FFFFFF; padding: 6px 18px; border-radius: 20px; font-size: 13px; font-weight: 600; box-shadow: 0 4px 12px rgba(210, 105, 30, 0.3);">
              ${typeDisplay}
            </div>
          </div>
          <h2 style="color: #663922; font-size: 32px; margin: 15px 0 8px; font-weight: 700; letter-spacing: -0.5px;">${pet.name}</h2>
          <p style="color: #a85b35; font-size: 16px; margin: 0; font-weight: 500;">${pet.breed} • ${pet.age}</p>
        </div>
        <div style="padding: 30px; flex: 1; overflow-y: auto;">
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 20px;">
            <div style="background: rgba(255,255,255,0.6); padding: 12px 16px; border-radius: 12px; border: 1px solid rgba(224, 193, 161, 0.3);">
              <p style="color: #a85b35; font-size: 12px; margin: 0 0 4px; font-weight: 600; text-transform: uppercase;">Type</p>
              <p style="color: #663922; font-size: 15px; margin: 0; font-weight: 600;">${typeDisplay}</p>
            </div>
            <div style="background: rgba(255,255,255,0.6); padding: 12px 16px; border-radius: 12px; border: 1px solid rgba(224, 193, 161, 0.3);">
              <p style="color: #a85b35; font-size: 12px; margin: 0 0 4px; font-weight: 600; text-transform: uppercase;">Age</p>
              <p style="color: #663922; font-size: 15px; margin: 0; font-weight: 600;">${pet.age}</p>
            </div>
            <div style="background: rgba(255,255,255,0.6); padding: 12px 16px; border-radius: 12px; border: 1px solid rgba(224, 193, 161, 0.3);">
              <p style="color: #a85b35; font-size: 12px; margin: 0 0 4px; font-weight: 600; text-transform: uppercase;">Gender</p>
              <p style="color: #663922; font-size: 15px; margin: 0; font-weight: 600;">${gender}</p>
            </div>
            <div style="background: rgba(255,255,255,0.6); padding: 12px 16px; border-radius: 12px; border: 1px solid rgba(224, 193, 161, 0.3);">
              <p style="color: #a85b35; font-size: 12px; margin: 0 0 4px; font-weight: 600; text-transform: uppercase;">Size</p>
              <p style="color: #663922; font-size: 15px; margin: 0; font-weight: 600;">${size}</p>
            </div>
          </div>
          <div style="background: rgba(255,255,255,0.6); padding: 20px; border-radius: 16px; margin-bottom: 20px; border: 1px solid rgba(224, 193, 161, 0.3);">
            <h3 style="color: #663922; font-size: 18px; margin: 0 0 12px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
              <span style="width: 4px; height: 20px; background: linear-gradient(180deg, #d2691e 0%, #b85c1b 100%); border-radius: 2px;"></span>
              About ${pet.name}
            </h3>
            <p style="color: #5a3b28; font-size: 15px; line-height: 1.7; margin: 0;">${pet.description}</p>
          </div>
          <div style="margin-bottom: 20px;">
            <h3 style="color: #663922; font-size: 18px; margin: 0 0 15px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
              <span style="width: 4px; height: 20px; background: linear-gradient(180deg, #d2691e 0%, #b85c1b 100%); border-radius: 2px;"></span>
              Personality
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: flex-start;">
              ${traitsHTML}
            </div>
          </div>
          <div style="background: rgba(255,255,255,0.6); padding: 20px; border-radius: 16px; margin-bottom: 20px; border: 1px solid rgba(224, 193, 161, 0.3);">
            <h3 style="color: #663922; font-size: 18px; margin: 0 0 12px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
              <span style="width: 4px; height: 20px; background: linear-gradient(180deg, #d2691e 0%, #b85c1b 100%); border-radius: 2px;"></span>
              Health Status
            </h3>
            <span style="display: inline-block; background: linear-gradient(135deg, #d2691e 0%, #b85c1b 100%); color: #FFFFFF; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">${healthStatus}</span>
          </div>
          <div style="background: rgba(255,255,255,0.6); padding: 20px; border-radius: 16px; margin-bottom: 20px; border: 1px solid rgba(224, 193, 161, 0.3);">
            <h3 style="color: #663922; font-size: 18px; margin: 0 0 12px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
              <span style="width: 4px; height: 20px; background: linear-gradient(180deg, #d2691e 0%, #b85c1b 100%); border-radius: 2px;"></span>
              Vaccinations
            </h3>
            <div style="color: #5a3b28; font-size: 14px;">
              ${vaccinationsHTML}
            </div>
          </div>
          <div style="background: rgba(255,255,255,0.6); padding: 20px; border-radius: 16px; margin-bottom: 20px; border: 1px solid rgba(224, 193, 161, 0.3);">
            <h3 style="color: #663922; font-size: 18px; margin: 0 0 12px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
              <span style="width: 4px; height: 20px; background: linear-gradient(180deg, #d2691e 0%, #b85c1b 100%); border-radius: 2px;"></span>
              Breed & Color
            </h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div>
                <p style="color: #a85b35; font-size: 12px; margin: 0 0 4px; font-weight: 600; text-transform: uppercase;">Breed</p>
                <p style="color: #663922; font-size: 15px; margin: 0; font-weight: 600;">${pet.breed}</p>
              </div>
              <div>
                <p style="color: #a85b35; font-size: 12px; margin: 0 0 4px; font-weight: 600; text-transform: uppercase;">Color</p>
                <p style="color: #663922; font-size: 15px; margin: 0; font-weight: 600;">${color}</p>
              </div>
            </div>
          </div>
          <div style="display: flex; gap: 12px; margin-top: 30px;">
            <button id="adoptFromModal" style="flex: 1; background: linear-gradient(135deg, #d2691e 0%, #b85c1b 100%); color: #FFFFFF; padding: 14px 24px; border: none; border-radius: 16px; font-size: 16px; font-weight: 600; cursor: pointer; transition: 0.3s; box-shadow: 0 4px 16px rgba(210, 105, 30, 0.3); display: flex; align-items: center; justify-content: center; gap: 8px;">
              <img src="../images/pawprint.png" alt="Adopt" style="width: 20px; height: 20px; filter: brightness(0) invert(1);">
              Adopt Me
            </button>
            <button id="closePetModal" style="background: #FFFFFF; color: #663922; padding: 14px 24px; border: 2px solid #e0c1a1; border-radius: 16px; font-size: 16px; font-weight: 600; cursor: pointer; transition: 0.3s; min-width: 120px;">
              Close
            </button>
          </div>
        </div>
      `;

      // Close button (X)
      const closeBtnX = modalContent.querySelector('#closePetModalX');
      if (closeBtnX) {
        closeBtnX.addEventListener('mouseenter', () => {
          closeBtnX.style.backgroundColor = '#ffffff';
          closeBtnX.style.transform = 'rotate(90deg)';
        });
        closeBtnX.addEventListener('mouseleave', () => {
          closeBtnX.style.backgroundColor = 'rgba(255,255,255,0.9)';
          closeBtnX.style.transform = 'rotate(0deg)';
        });
        closeBtnX.addEventListener('click', () => {
          modal.style.animation = 'fadeOut 0.3s ease';
          setTimeout(() => modal.remove(), 300);
        });
      }

      // Close button (bottom)
      const closeBtn = modalContent.querySelector('#closePetModal');
      closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.backgroundColor = '#f9decd';
        closeBtn.style.borderColor = '#d2691e';
      });
      closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.backgroundColor = '#FFFFFF';
        closeBtn.style.borderColor = '#e0c1a1';
      });
      closeBtn.addEventListener('click', () => {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => modal.remove(), 300);
      });

      // Adopt button
      const adoptBtn = modalContent.querySelector('#adoptFromModal');
      adoptBtn.addEventListener('mouseenter', () => {
        adoptBtn.style.transform = 'translateY(-2px)';
        adoptBtn.style.boxShadow = '0 6px 20px rgba(210, 105, 30, 0.4)';
      });
      adoptBtn.addEventListener('mouseleave', () => {
        adoptBtn.style.transform = 'translateY(0)';
        adoptBtn.style.boxShadow = '0 4px 16px rgba(210, 105, 30, 0.3)';
      });
      adoptBtn.addEventListener('click', () => {
        const currentUserStr = localStorage.getItem("currentUser");
        const currentUser = currentUserStr ? JSON.parse(currentUserStr) : null;
        localStorage.setItem("selectedPet", JSON.stringify(pet));
        
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
          modal.remove();
          if (currentUser) {
            window.location.href = "adoption-form.html";
          } else {
            window.location.href = "signup.html";
          }
        }, 300);
      });

      // Close on overlay click
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.animation = 'fadeOut 0.3s ease';
          setTimeout(() => modal.remove(), 300);
        }
      });

      modal.appendChild(modalContent);
      document.body.appendChild(modal);

      // Add animations if not already added
      if (!document.getElementById('petModalStyles')) {
        const style = document.createElement('style');
        style.id = 'petModalStyles';
        style.textContent = `
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }
          @keyframes slideUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `;
        document.head.appendChild(style);
      }
    }

    function displayPets(petList) {
      // Create or update count header
      let countHeader = document.querySelector(".pets-count-header");
      if (!countHeader) {
        countHeader = document.createElement("h2");
        countHeader.className = "pets-count-header";
        petsContainer.parentNode.insertBefore(countHeader, petsContainer);
      }
      countHeader.textContent = `All Pets (${petList.length} ${petList.length === 1 ? 'pet' : 'pets'})`;

      petsContainer.innerHTML = "";
      
      if (petList.length === 0) {
        petsContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1; color: #666; font-size: 18px; padding: 40px;">No pets found matching your criteria.</p>';
        return;
      }

      petList.forEach(pet => {
        const card = document.createElement("div");
        card.classList.add("pet-card");
        
        const typeDisplay = getTypeDisplay(pet.type);
        const traitsHTML = pet.traits.map(trait => 
          `<span class="trait-tag">${trait}</span>`
        ).join("");

        card.innerHTML = `
          <div class="pet-image-wrapper">
            <img src="${pet.image}" alt="${pet.name}">
          </div>
          <div class="pet-info">
            <div class="pet-header">
              <div class="pet-name-breed">
                <div class="pet-name">${pet.name}</div>
                <div class="pet-breed-age">${pet.breed} • ${pet.age}</div>
              </div>
              <span class="pet-type-tag">${typeDisplay}</span>
            </div>
            <div class="pet-description">${pet.description}</div>
            <div class="pet-traits">${traitsHTML}</div>
            <div class="pet-actions">
              <button class="details-btn"><img src="../images/detail-icon.png" alt="Details" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 6px;"> Details</button>
              <button class="adopt-btn"><img src="../images/pawprint.png" alt="Adopt" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 6px;"> Adopt</button>
            </div>
          </div>
        `;
        petsContainer.appendChild(card);

        // Details button functionality
        card.querySelector(".details-btn").addEventListener("click", () => {
          showPetDetailsModal(pet);
        });

        // Adopt button functionality
        card.querySelector(".adopt-btn").addEventListener("click", () => {
          const currentUserStr = localStorage.getItem("currentUser");
          const currentUser = currentUserStr ? JSON.parse(currentUserStr) : null;
          localStorage.setItem("selectedPet", JSON.stringify(pet));
          
          if (currentUser) {
            // User is logged in - redirect to adoption form
            window.location.href = "adoption-form.html";
          } else {
            // User is not logged in - redirect to signup
            window.location.href = "signup.html";
          }
        });
      });
    }

    // Initial display
    displayPets(pets);

    // Search functionality
    search.addEventListener("keyup", () => {
      applyFilters();
    });

    // Category filter functionality
    categoryButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        // Update active state
        categoryButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        applyFilters();
      });
    });

    // Filter state
    let currentFilters = {
      type: "",
      gender: "",
      size: "",
      healthStatus: ""
    };

    // Filter modal function
    function showFilterModal() {
      const existingModal = document.getElementById('filterModal');
      if (existingModal) {
        existingModal.remove();
      }

      const modal = document.createElement('div');
      modal.id = 'filterModal';
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
      `;

      const modalContent = document.createElement('div');
      modalContent.style.cssText = `
        background-color: #f9decd;
        border-radius: 20px;
        padding: 40px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease;
      `;

      modalContent.innerHTML = `
        <h2 style="color: #663922; font-size: 24px; font-weight: 700; margin-bottom: 25px; text-align: center;">Filter Pets</h2>
        <div style="margin-bottom: 20px;">
          <label style="display: block; color: #663922; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Type</label>
          <select id="filterType" style="width: 100%; padding: 12px; border: 2px solid #e0c1a1; border-radius: 12px; font-size: 14px; background: #ffffff; color: #5a3b28;">
            <option value="">All Types</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="rabbit">Rabbit</option>
            <option value="hamster">Hamster</option>
            <option value="bird">Bird</option>
            <option value="guinea pig">Other</option>
          </select>
        </div>
        <div style="margin-bottom: 20px;">
          <label style="display: block; color: #663922; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Gender</label>
          <select id="filterGender" style="width: 100%; padding: 12px; border: 2px solid #e0c1a1; border-radius: 12px; font-size: 14px; background: #ffffff; color: #5a3b28;">
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div style="margin-bottom: 20px;">
          <label style="display: block; color: #663922; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Size</label>
          <select id="filterSize" style="width: 100%; padding: 12px; border: 2px solid #e0c1a1; border-radius: 12px; font-size: 14px; background: #ffffff; color: #5a3b28;">
            <option value="">All Sizes</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div style="margin-bottom: 25px;">
          <label style="display: block; color: #663922; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Health Status</label>
          <select id="filterHealth" style="width: 100%; padding: 12px; border: 2px solid #e0c1a1; border-radius: 12px; font-size: 14px; background: #ffffff; color: #5a3b28;">
            <option value="">All Statuses</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
        </div>
        <div style="display: flex; gap: 12px;">
          <button id="applyFilterBtn" style="flex: 1; background-color: #d2691e; color: #FFFFFF; padding: 12px 24px; border: none; border-radius: 30px; font-size: 16px; font-weight: 600; cursor: pointer; transition: 0.3s;">
            Apply Filters
          </button>
          <button id="clearFilterBtn" style="background-color: #FFFFFF; color: #663922; padding: 12px 24px; border: 2px solid #663922; border-radius: 30px; font-size: 16px; font-weight: 600; cursor: pointer; transition: 0.3s;">
            Clear
          </button>
        </div>
      `;

      // Set current filter values (use querySelector on modalContent)
      const filterType = modalContent.querySelector("#filterType");
      const filterGender = modalContent.querySelector("#filterGender");
      const filterSize = modalContent.querySelector("#filterSize");
      const filterHealth = modalContent.querySelector("#filterHealth");
      
      if (filterType) filterType.value = currentFilters.type;
      if (filterGender) filterGender.value = currentFilters.gender;
      if (filterSize) filterSize.value = currentFilters.size;
      if (filterHealth) filterHealth.value = currentFilters.healthStatus;

      // Apply filter button
      const applyBtn = modalContent.querySelector('#applyFilterBtn');
      applyBtn.addEventListener('mouseenter', () => {
        applyBtn.style.backgroundColor = '#b85c1b';
        applyBtn.style.transform = 'scale(1.02)';
      });
      applyBtn.addEventListener('mouseleave', () => {
        applyBtn.style.backgroundColor = '#d2691e';
        applyBtn.style.transform = 'scale(1)';
      });
      applyBtn.addEventListener('click', () => {
        currentFilters.type = filterType ? filterType.value : "";
        currentFilters.gender = filterGender ? filterGender.value : "";
        currentFilters.size = filterSize ? filterSize.value : "";
        currentFilters.healthStatus = filterHealth ? filterHealth.value : "";
        applyFilters();
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => modal.remove(), 300);
      });

      // Clear filter button
      const clearBtn = modalContent.querySelector('#clearFilterBtn');
      clearBtn.addEventListener('mouseenter', () => {
        clearBtn.style.backgroundColor = '#f9decd';
      });
      clearBtn.addEventListener('mouseleave', () => {
        clearBtn.style.backgroundColor = '#FFFFFF';
      });
      clearBtn.addEventListener('click', () => {
        currentFilters = { type: "", gender: "", size: "", healthStatus: "" };
        if (filterType) filterType.value = "";
        if (filterGender) filterGender.value = "";
        if (filterSize) filterSize.value = "";
        if (filterHealth) filterHealth.value = "";
        applyFilters();
      });

      // Close on overlay click
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.animation = 'fadeOut 0.3s ease';
          setTimeout(() => modal.remove(), 300);
        }
      });

      modal.appendChild(modalContent);
      document.body.appendChild(modal);
    }

    // Apply filters function
    function applyFilters() {
      let filteredPets = [...pets];

      // Apply type filter
      if (currentFilters.type) {
        if (currentFilters.type === "bird") {
          filteredPets = filteredPets.filter(pet => pet.type === "parrot" || pet.type === "bird");
        } else if (currentFilters.type === "guinea pig") {
          filteredPets = filteredPets.filter(pet => pet.type === "guinea pig");
        } else {
          filteredPets = filteredPets.filter(pet => pet.type === currentFilters.type);
        }
      }

      // Apply gender filter
      if (currentFilters.gender) {
        filteredPets = filteredPets.filter(pet => (pet.gender || "").toLowerCase() === currentFilters.gender.toLowerCase());
      }

      // Apply size filter
      if (currentFilters.size) {
        filteredPets = filteredPets.filter(pet => (pet.size || "").toLowerCase() === currentFilters.size.toLowerCase());
      }

      // Apply health status filter
      if (currentFilters.healthStatus) {
        filteredPets = filteredPets.filter(pet => (pet.healthStatus || "Good").toLowerCase() === currentFilters.healthStatus.toLowerCase());
      }

      // Apply category filter
      const activeCategory = document.querySelector(".category-btn.active");
      if (activeCategory && activeCategory.dataset.filter !== "all") {
        const filterType = activeCategory.dataset.filter;
        if (filterType === "bird") {
          filteredPets = filteredPets.filter(pet => pet.type === "parrot" || pet.type === "bird");
        } else if (filterType === "other") {
          filteredPets = filteredPets.filter(pet => pet.type === "guinea pig");
        } else {
          filteredPets = filteredPets.filter(pet => pet.type === filterType);
        }
      }

      // Apply search filter
      const searchText = search.value.toLowerCase();
      if (searchText) {
        filteredPets = filteredPets.filter(pet =>
          pet.name.toLowerCase().includes(searchText) ||
          pet.breed.toLowerCase().includes(searchText) ||
          pet.type.toLowerCase().includes(searchText) ||
          pet.description.toLowerCase().includes(searchText)
        );
      }

      displayPets(filteredPets);
    }

    // Filter button event listener
    if (filterBtn) {
      filterBtn.addEventListener("click", () => {
        showFilterModal();
      });
    }

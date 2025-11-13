let users = JSON.parse(localStorage.getItem("users")) || [];

// Helper function to add error styling
function addErrorStyle(element) {
  if (element) {
    element.style.border = "2px solid #dc3545";
    element.style.outline = "none";
  }
}

// Helper function to remove error styling
function removeErrorStyle(element) {
  if (element) {
    element.style.border = "";
    element.style.outline = "";
  }
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

// Real-time validation with visual feedback
function setupFieldValidation() {
  const fullNameInput = document.getElementById("signupFullName");
  const usernameInput = document.getElementById("signupUsername");
  const emailInput = document.getElementById("signupEmail");
  const phoneInput = document.getElementById("signupPhone");
  const birthdayInput = document.getElementById("signupBirthday");
  const passwordInput = document.getElementById("signupPassword");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const barangayInput = document.getElementById("signupBarangay");
  const municipalityInput = document.getElementById("signupMunicipality");
  const provinceInput = document.getElementById("signupProvince");

  // Full Name validation
  if (fullNameInput) {
    fullNameInput.addEventListener("blur", () => {
      if (!fullNameInput.value.trim()) {
        addErrorStyle(fullNameInput);
      } else {
        removeErrorStyle(fullNameInput);
      }
    });
    fullNameInput.addEventListener("input", () => {
      if (fullNameInput.value.trim()) {
        removeErrorStyle(fullNameInput);
      }
    });
  }

  // Username validation
  if (usernameInput) {
    usernameInput.addEventListener("blur", () => {
      if (!usernameInput.value.trim()) {
        addErrorStyle(usernameInput);
      } else {
        removeErrorStyle(usernameInput);
      }
    });
    usernameInput.addEventListener("input", () => {
      if (usernameInput.value.trim()) {
        removeErrorStyle(usernameInput);
      }
    });
  }

  // Email validation
  if (emailInput) {
    emailInput.addEventListener("blur", () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
        addErrorStyle(emailInput);
      } else {
        removeErrorStyle(emailInput);
      }
    });
    emailInput.addEventListener("input", () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() && emailRegex.test(emailInput.value)) {
        removeErrorStyle(emailInput);
      }
    });
  }

  // Phone validation
  if (phoneInput) {
    phoneInput.addEventListener("blur", () => {
      if (!phoneInput.value.trim()) {
        addErrorStyle(phoneInput);
      } else {
        removeErrorStyle(phoneInput);
      }
    });
    phoneInput.addEventListener("input", () => {
      if (phoneInput.value.trim()) {
        removeErrorStyle(phoneInput);
      }
    });
  }

  // Birthday validation (18+)
  if (birthdayInput) {
    birthdayInput.addEventListener("blur", () => {
      if (!birthdayInput.value) {
        addErrorStyle(birthdayInput);
      } else {
        const age = calculateAge(birthdayInput.value);
        if (age < 18) {
          addErrorStyle(birthdayInput);
        } else {
          removeErrorStyle(birthdayInput);
        }
      }
    });
    birthdayInput.addEventListener("change", () => {
      if (birthdayInput.value) {
        const age = calculateAge(birthdayInput.value);
        if (age >= 18) {
          removeErrorStyle(birthdayInput);
        }
      }
    });
  }

  // Password validation (min 8 characters)
  if (passwordInput) {
    passwordInput.addEventListener("blur", () => {
      if (passwordInput.value.length < 8) {
        addErrorStyle(passwordInput);
      } else {
        removeErrorStyle(passwordInput);
      }
    });
    passwordInput.addEventListener("input", () => {
      if (passwordInput.value.length >= 8) {
        removeErrorStyle(passwordInput);
      }
    });
  }

  // Confirm Password validation
  if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener("blur", () => {
      if (confirmPasswordInput.value !== passwordInput.value) {
        addErrorStyle(confirmPasswordInput);
      } else {
        removeErrorStyle(confirmPasswordInput);
      }
    });
    confirmPasswordInput.addEventListener("input", () => {
      if (confirmPasswordInput.value === passwordInput.value && passwordInput.value.length >= 8) {
        removeErrorStyle(confirmPasswordInput);
      }
    });
  }

  // Address validation
  [barangayInput, municipalityInput, provinceInput].forEach(input => {
    if (input) {
      input.addEventListener("blur", () => {
        if (!input.value.trim()) {
          addErrorStyle(input);
        } else {
          removeErrorStyle(input);
        }
      });
      input.addEventListener("input", () => {
        if (input.value.trim()) {
          removeErrorStyle(input);
        }
      });
    }
  });
}

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  // Setup real-time validation
  setupFieldValidation();

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous error styles
    const allInputs = signupForm.querySelectorAll("input");
    allInputs.forEach(input => removeErrorStyle(input));

    const fullName = document.getElementById("signupFullName").value.trim();
    const username = document.getElementById("signupUsername").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const phone = document.getElementById("signupPhone").value.trim();
    const birthday = document.getElementById("signupBirthday").value;
    const barangay = document.getElementById("signupBarangay").value.trim();
    const municipality = document.getElementById("signupMunicipality").value.trim();
    const province = document.getElementById("signupProvince").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    let hasErrors = false;

    // Validation with visual feedback
    if (!fullName) {
      addErrorStyle(document.getElementById("signupFullName"));
      hasErrors = true;
    }

    if (!username) {
      addErrorStyle(document.getElementById("signupUsername"));
      hasErrors = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      addErrorStyle(document.getElementById("signupEmail"));
      hasErrors = true;
    }

    if (!phone) {
      addErrorStyle(document.getElementById("signupPhone"));
      hasErrors = true;
    }

    if (!birthday) {
      addErrorStyle(document.getElementById("signupBirthday"));
      showModal("Please enter your birthday.");
      hasErrors = true;
    } else {
      const age = calculateAge(birthday);
      if (age < 18) {
        addErrorStyle(document.getElementById("signupBirthday"));
        showModal("You must be 18 years or older to sign up.");
        hasErrors = true;
      }
    }

    if (password.length < 8) {
      addErrorStyle(document.getElementById("signupPassword"));
      showModal("Password must be at least 8 characters.");
      hasErrors = true;
    }

    if (password !== confirmPassword) {
      addErrorStyle(document.getElementById("confirmPassword"));
      showModal("Passwords do not match.");
      hasErrors = true;
    }

    if (!barangay || !municipality || !province) {
      if (!barangay) addErrorStyle(document.getElementById("signupBarangay"));
      if (!municipality) addErrorStyle(document.getElementById("signupMunicipality"));
      if (!province) addErrorStyle(document.getElementById("signupProvince"));
      showModal("Please complete your address information.");
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    // Check for existing user by email or username
    const existingUser = users.find(user => user.email === email || user.username === username);
    if (existingUser) {
      if (existingUser.email === email) {
        addErrorStyle(document.getElementById("signupEmail"));
      }
      if (existingUser.username === username) {
        addErrorStyle(document.getElementById("signupUsername"));
      }
      showModal("Email or username is already registered.");
      return;
    }

    // Construct full address
    const address = `${barangay}, ${municipality}, ${province}`;

    const newUser = {
      role: "user",
      fullName,
      username,
      email,
      phone,
      birthday,
      address,
      password,
      profileImage: "../images/default-prof.jpg"
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    showModal("Account created successfully!", "success", () => {
      window.location.href = "login.html";
    });
  });
}

document.querySelectorAll(".toggle-password").forEach(icon => {
  icon.addEventListener("click", function () {
    const wrapper = this.closest(".input-wrapper");
    const input = wrapper.querySelector("input");

    if (input.type === "password") {
      input.setAttribute("type", "text");
      this.src = "../images/show.png";
      this.alt = "Hide password";
    } else {
      input.setAttribute("type", "password");
      this.src = "../images/hide.png";
      this.alt = "Show password";
    }
  });
});

const googleBtn = document.getElementById("loginGoogleBtn") || document.getElementById("signupGoogleBtn");
const facebookBtn = document.getElementById("loginFacebookBtn") || document.getElementById("signupFacebookBtn");

if (googleBtn) {
  googleBtn.addEventListener("click", () => {
    window.open("https://accounts.google.com", "_blank");
  });
}

if (facebookBtn) {
  facebookBtn.addEventListener("click", () => {
    window.open("https://www.facebook.com", "_blank");
  });
}

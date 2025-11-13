// Load current user from localStorage
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let users = JSON.parse(localStorage.getItem("users")) || [];

// If no user is logged in, redirect to login
if (!currentUser) {
  showModal("Please log in to view your profile.", "info", () => {
    window.location.href = "login.html";
  });
} else {
  // Helper function to format birthday
  function formatBirthday(birthday) {
    if (!birthday) return "Not set";
    const date = new Date(birthday);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  // Use currentUser data, with fallback to default structure
  let user = {
    name: currentUser.fullName || currentUser.name || "",
    userName: currentUser.username || currentUser.userName || "",
    email: currentUser.email || "",
    phone: currentUser.phone || "",
    birthday: currentUser.birthday || "",
    address: currentUser.address || "",
    profileImage: currentUser.profileImage || "../images/default-prof.jpg"
  };

  function updateView() {
    document.getElementById('displayName').textContent = user.name;
    document.getElementById('viewName').textContent = user.name;
    document.getElementById('viewUsername').textContent = user.userName;
    document.getElementById('viewEmail').textContent = user.email;
    document.getElementById('viewPhone').textContent = user.phone;
    document.getElementById('viewBirthday').textContent = formatBirthday(user.birthday);
    document.getElementById('viewAddress').textContent = user.address;
    
    // Update profile image
    const profileImg = document.getElementById('profileImage');
    if (profileImg) {
      profileImg.src = user.profileImage;
    }

    document.getElementById('editName').value = user.name;
    document.getElementById('editUsername').value = user.userName;
    document.getElementById('editEmail').value = user.email;
    document.getElementById('editPhone').value = user.phone;
    document.getElementById('editBirthday').value = user.birthday || "";
    document.getElementById('editAddress').value = user.address;
  }

  updateView();

  // Image upload functionality
  const imageUpload = document.getElementById('profileImageUpload');
  const profileImg = document.getElementById('profileImage');
  const uploadBtn = document.getElementById('uploadImageBtn');

  if (uploadBtn) {
    uploadBtn.addEventListener('click', () => {
      imageUpload.click();
    });
  }

  if (profileImg) {
    profileImg.addEventListener('click', () => {
      imageUpload.click();
    });
  }

  if (imageUpload) {
    imageUpload.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        if (file.size > 2 * 1024 * 1024) {
          showModal("Image size must be less than 2MB.");
          return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageBase64 = event.target.result;
          user.profileImage = imageBase64;
          profileImg.src = imageBase64;
          
          // Update currentUser object
          currentUser.profileImage = imageBase64;
          
          // Update in users array
          const userIndex = users.findIndex(u => u.email === currentUser.email || u.username === currentUser.username);
          if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...currentUser };
            localStorage.setItem("users", JSON.stringify(users));
          }
          
          // Update currentUser in localStorage
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          
          showModal("Profile picture updated successfully!", "success");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const editBtn = document.getElementById('editBtn');
  const saveBtn = document.getElementById('saveBtn');
  const infoView = document.getElementById('infoView');
  const infoEdit = document.getElementById('infoEdit');

  editBtn.addEventListener('click', () => {
    infoView.classList.add('hidden');
    infoEdit.classList.remove('hidden');
    editBtn.classList.add('hidden');
  });

  saveBtn.addEventListener('click', () => {
    user.name = document.getElementById('editName').value;
    user.userName = document.getElementById('editUsername').value;
    user.email = document.getElementById('editEmail').value;
    user.phone = document.getElementById('editPhone').value;
    user.birthday = document.getElementById('editBirthday').value;
    user.address = document.getElementById('editAddress').value;

    // Update currentUser object
    currentUser.fullName = user.name;
    currentUser.username = user.userName;
    currentUser.email = user.email;
    currentUser.phone = user.phone;
    currentUser.birthday = user.birthday;
    currentUser.address = user.address;

    // Update in users array
    const userIndex = users.findIndex(u => u.email === currentUser.email || u.username === currentUser.username);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...currentUser };
      localStorage.setItem("users", JSON.stringify(users));
    }

    // Update currentUser in localStorage
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    updateView();

    infoView.classList.remove('hidden');
    infoEdit.classList.add('hidden');
    editBtn.classList.remove('hidden');

    showModal("Profile updated successfully!", "success");
  });

  // Set active class for current page
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPage = window.location.pathname.split('/').pop() || 'pages/profile.html';
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else if (linkPage !== '#') {
      link.classList.remove('active');
    }
  });

  // Logout functionality
  const logoutLink = document.getElementById('logout-link');
  if (logoutLink) {
    logoutLink.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem("currentUser");
      showModal("You have been logged out.", "info", () => {
        window.location.href = "index.html";
      });
    });
  }
}

let user = {
  name: "Mylene Babia",
  userName: "mylenebabia2005",
  email: "mylenesalise17@gmail.com",
  phone: "09103029715",
  address: "Waterfall, Balingasag, Misamis Oriental"
};

function updateView() {
  document.getElementById('displayName').textContent = user.name;
  document.getElementById('viewName').textContent = user.name;
  document.getElementById('viewUsername').textContent = user.userName;
  document.getElementById('viewEmail').textContent = user.email;
  document.getElementById('viewPhone').textContent = user.phone;
  document.getElementById('viewAddress').textContent = user.address;

  document.getElementById('editName').value = user.name;
  document.getElementById('editUsername').value = user.userName;
  document.getElementById('editEmail').value = user.email;
  document.getElementById('editPhone').value = user.phone;
  document.getElementById('editAddress').value = user.address;
}

updateView();

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
  user.address = document.getElementById('editAddress').value;

  updateView();

  infoView.classList.remove('hidden');
  infoEdit.classList.add('hidden');
  editBtn.classList.remove('hidden');
});

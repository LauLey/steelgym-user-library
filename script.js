const usersContainer = document.querySelector("#users-container");
const users = [];

function User(name, birthDate, phoneNumber, membership, status) {
    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
    this.name = name;
    this.birthDate = birthDate;
    this.phoneNumber = phoneNumber;
    this.membership = membership;
    this.status = status;
    this.id = crypto.randomUUID()
}

function addUserToUsers(name, birthDate, phoneNumber, membership, status) {
  const NewUser = new User(name, birthDate, phoneNumber, membership, status);
  users.push(NewUser);
}


function displayUsers() {
    users.forEach((user) => {
        const userCard = document.createElement("div");

        createUserInfo(userCard, "Nombre:", user.name);
        createUserInfo(userCard, "Fecha de nacimiento:", user.birthDate);
        createUserInfo(userCard, "Teléfono:", user.phoneNumber);
        createUserInfo(userCard, "Membresía:", user.membership);
        createUserInfo(userCard, "Estado:", user.status);
        createUserInfo(userCard, "Id:", user.id);

        usersContainer.appendChild(userCard);
    });
}


function createUserInfo(userCard, label, value) {
    const info = document.createElement("p");
    userCard.appendChild(info);
    info.textContent = label + " " + value;
}

addUserToUsers("Laura", "23 septiembre 1996", "9511312141", "mensual", true);

displayUsers();
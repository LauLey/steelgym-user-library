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
        usersContainer.appendChild(userCard);
        const infoUser = document.createElement("p");
        userCard.appendChild(infoUser);
        infoUser.textContent = user.name;

    });
}

addUserToUsers("Laura", "23 septiembre 1996", "9511312141", "mensual", true);

displayUsers();
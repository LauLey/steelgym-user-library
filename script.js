const usersContainer = document.querySelector("#users-container");
const users = [];
const addUser = document.querySelector("#addUser");
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector("#close");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const birthDate = data.get("birthDate");
    const phoneNumber = data.get("phoneNumber");
    const membership = data.get("membership");
    const status = data.get("status");
    const newUser = addUserToUsers(name, birthDate, phoneNumber, membership, status);
    usersContainer.appendChild(createUserCard(newUser));
    addUser.disabled = false;
    dialog.close();
})

addUser.addEventListener("click", () => {
    addUser.disabled = true;
    dialog.showModal();

})

closeBtn.addEventListener("click", () => {
    addUser.disabled = false;
    dialog.close();
})

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
  const newUser = new User(name, birthDate, phoneNumber, membership, status);
  users.push(newUser);
  return newUser;
}

function createUserCard(user) {
        const userCard = document.createElement("div");

        createUserInfo(userCard, "Nombre:", user.name);
        createUserInfo(userCard, "Fecha de nacimiento:", user.birthDate);
        createUserInfo(userCard, "Teléfono:", user.phoneNumber);
        createUserInfo(userCard, "Membresía:", user.membership);
        createUserInfo(userCard, "Estado:", user.status);
        createUserInfo(userCard, "Id:", user.id);

        const deleteButton = document.createElement("button");
        userCard.appendChild(deleteButton);
        deleteButton.textContent = "Eliminar";

        deleteButton.addEventListener("click", () => {
            const index = users.findIndex((item) => item.id === user.id);
            users.splice(index, 1);
            userCard.remove();
        });

        const statusButton = document.createElement("button");
        userCard.appendChild(statusButton);
        statusButton.textContent = user.status ? "Activo" : "Inactivo";

        statusButton.addEventListener("click", () => {
            if (user.status === true) {
                user.status = false
                statusButton.textContent = "Inactivo";
            }

            else {
                user.status = true;
                statusButton.textContent = "Activo"
            }
        })

        return userCard;
}

function displayUsers() {
    users.forEach((user) => {
        usersContainer.appendChild(createUserCard(user));
    });
}


function createUserInfo(userCard, label, value) {
    const info = document.createElement("p");
    userCard.appendChild(info);
    info.textContent = label + " " + value;
}

addUserToUsers("Laura", "23 septiembre 1996", "9511312141", "mensual", true);

displayUsers();
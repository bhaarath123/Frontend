const localStorageKey = "system_registered_users";

const regBtn = document.getElementById("register-btn");
const inputUser = document.getElementById("reg-username");
const inputEmail = document.getElementById("reg-email");
const inputPass = document.getElementById("reg-password");

regBtn.addEventListener("click", () => {
    const username = inputUser.value.trim();
    const email = inputEmail.value.trim();
    const password = inputPass.value.trim();

    if (!username || !email || !password) {
        alert("All fields are required to register an account.");
        return;
    }

    const rawData = localStorage.getItem(localStorageKey);
    const usersList = rawData ? JSON.parse(rawData) : [];

    const duplicateExists = usersList.some(user => user.username.toLowerCase() === username.toLowerCase());
    if (duplicateExists) {
        alert("This username is already taken. Please pick another one.");
        return;
    }

    const newUserObject = { username, email, password };
    usersList.push(newUserObject);
    localStorage.setItem(localStorageKey, JSON.stringify(usersList));

    alert("Registration successful! Redirecting to login...");
    window.location.href = "login.html";
});

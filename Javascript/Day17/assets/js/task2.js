const localStorageKey = "system_registered_users";
const currentSessionKey = "active_logged_in_user";

const loginBtn = document.getElementById("login-btn");
const inputUser = document.getElementById("login-username");
const inputPass = document.getElementById("login-password");

loginBtn.addEventListener("click", () => {
    const username = inputUser.value.trim();
    const password = inputPass.value.trim();

    if (!username || !password) {
        alert("Please fill out both username and password fields.");
        return;
    }

    const rawData = localStorage.getItem(localStorageKey);
    const usersList = rawData ? JSON.parse(rawData) : [];
    
    const matchedUser = usersList.find(user => user.username.toLowerCase() === username.toLowerCase() && user.password === password);

    if (matchedUser) {
        localStorage.setItem(currentSessionKey, matchedUser.username);
        alert("Login success! Redirecting to dashboard...");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password configuration.");
    }
});

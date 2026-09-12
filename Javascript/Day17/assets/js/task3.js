const localStorageKey = "system_registered_users";
const currentSessionKey = "active_logged_in_user";

const currentUser = localStorage.getItem(currentSessionKey);
const userDisplay = document.getElementById("current-user-display");
const tableBody = document.getElementById("users-table-body");
const logoutBtn = document.getElementById("logout-btn");

if (!currentUser) {
    alert("Unauthorized access detected. Redirecting to login.");
    window.location.href = "task3.html";
} else {
    userDisplay.textContent = currentUser;

    const rawData = localStorage.getItem(localStorageKey);
    const allUsers = rawData ? JSON.parse(rawData) : [];
    
    tableBody.innerHTML = "";

    allUsers.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
        `;
        tableBody.appendChild(row);
    });

    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem(currentSessionKey);
        alert("Logged out securely.");
        window.location.href = "task3.html";
    });
}

const title = document.getElementById("click-title");
const button = document.getElementById("action-btn");

function handleButtonClick() {
    title.textContent = "Title Changed Successfully!";
    title.style.color = "red";
    title.classList.add("highlight-style");
}

button.addEventListener("click", handleButtonClick);

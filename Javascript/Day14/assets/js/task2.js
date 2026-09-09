// Step 1: Capture references to our DOM elements
const toggleBtn = document.getElementById('toggle-btn');
const myBox = document.getElementById('my-box');

// Step 2: Listen for user interaction
toggleBtn.addEventListener('click', () => {
    // Step 3: Automatically add or remove the '.green-mode' class rule
    myBox.classList.toggle('green-mode');
});

// ========================================================
// TASK 1 – Add Class Logic
// ========================================================
const btnAdd = document.getElementById('btn-add');
const boxAdd = document.getElementById('box-add');

btnAdd.addEventListener('click', () => {
    // Specifically targets adding the active rules styling layout
    boxAdd.classList.add('active');
    boxAdd.textContent = "Class Added!";
});

// ========================================================
// TASK 2 – Remove Class Logic
// ========================================================
const btnRemove = document.getElementById('btn-remove');
const boxRemove = document.getElementById('box-remove');

btnRemove.addEventListener('click', () => {
    // Specifically drops the active rule styling layout
    boxRemove.classList.remove('active');
    boxRemove.textContent = "Class Removed!";
});

// ========================================================
// TASK 3 – Toggle Theme Logic
// ========================================================
const btnTheme = document.getElementById('btn-theme');
const cardTheme = document.getElementById('card-theme');

btnTheme.addEventListener('click', () => {
    // Automatically toggles between standard color rules and dark styles
    cardTheme.classList.toggle('dark-theme');
});

// ========================================================
// EXTRA TASK – Input Value to Console Logic
// ========================================================
const userInput = document.getElementById('user-input');
const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click', () => {
    // Captures the string state inside the input box element layout
    const textValue = userInput.value;
    
    // Prints the captured text values straight into the developer tool console
    console.log("Submitted Input Value:", textValue);
    
    // Optional clean reset step: empties the box after logging it
    userInput.value = ""; 
});

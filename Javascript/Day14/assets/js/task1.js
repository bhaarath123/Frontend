const toggleBtn = document.getElementById('toggle-btn');
const targetParagraph = document.getElementById('target-paragraph');

// Step 2: Bind the click trigger
toggleBtn.addEventListener('click', () => {
    // Step 3: Toggle the CSS utility class to trigger transitions
    targetParagraph.classList.toggle('reveal');
    
    // Step 4: Dynamically adjust the button text for better UX
    if (targetParagraph.classList.contains('reveal')) {
        toggleBtn.textContent = 'Hide Content';
    } else {
        toggleBtn.textContent = 'Show Content';
    }
});

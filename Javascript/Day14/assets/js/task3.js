// Step 1: Cache references to active DOM nodes
const cardToggleBtn = document.getElementById('card-toggle-btn');
const cardDetailsPanel = document.getElementById('card-details-panel');

// Step 2: Establish tracking listeners on UI triggers
cardToggleBtn.addEventListener('click', () => {
    // Step 3: Use classList.toggle to switch visual classes seamlessly
    cardDetailsPanel.classList.toggle('open');
    
    // Step 4: Dynamically updates the button text for better feedback
    if (cardDetailsPanel.classList.contains('open')) {
        cardToggleBtn.textContent = 'Hide Details';
    } else {
        cardToggleBtn.textContent = 'Show Details';
    }
});

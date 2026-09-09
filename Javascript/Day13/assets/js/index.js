const button = document.getElementById("color-btn");

// Start our color flag state at false
let isBlue = false;

function changeBackground() {
    // Flip the Boolean flag to its opposite state
    isBlue = !isBlue;

    // Check the flag status and update the background color
    if (isBlue === true) {
        document.body.style.backgroundColor = "darkblue";
        document.body.style.color = "white"; // Changes text color to white so it's readable
    } else {
        document.body.style.backgroundColor = "lightcoral";
        document.body.style.color = "black"; // Changes text color back to black
    }
}

button.addEventListener("click", changeBackground);

// Declare a read-only constant variable
const companyName = "SLA";
console.log("Original Company Name:", companyName);

// Attempting to reassign the constant value
try {
    companyName = "Tech Corp"; // This line will trigger a runtime error
} catch (error) {
    console.error("Observed Error:", error.message);
}

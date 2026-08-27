// Simple arrow function using string concatenation
const generateMessage = (name, mark) => {
    return "Student " + name + " scored " + mark + " marks.";
};

// Testing the function
const message = generateMessage("Karan", 88);
console.log(message);

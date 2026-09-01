// Our starting data
const numbers =" ";

const student = {
    name: "Ravi",
    age: 25,
    course: "JavaScript"
};

// 1. Array Destructuring (Unpacking by order/position)
// x gets index 0 (10), y gets index 1 (20), z gets index 2 (30)
const [x=20, y=30, z=45] = numbers;
console.log("Unpacked Numbers:", x, y, z);

// 2. Object Destructuring (Unpacking by matching property names)
// The variable names MUST match the keys inside the object
const { name, age, course } = student;
console.log("Unpacked Student Data:");
console.log("name is:", name);
console.log("Age is:", age);
console.log("Course is:", course);

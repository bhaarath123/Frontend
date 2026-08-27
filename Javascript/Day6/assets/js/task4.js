const studentList = [
    { name: "Amit", mark: 88 },
    { name: "Neha", mark: 95 },
    { name: "Rohan", mark: 72 }
];

const searchName = "Neha";

for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].name === searchName) {
        console.log("Found: " + studentList[i].name + ", Mark: " + studentList[i].mark);
        break; 
    }
}

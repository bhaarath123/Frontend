const employees = [
    { name: "Karan", salary: 35000 },
    { name: "Deepika", salary: 55000 },
    { name: "Suresh", salary: 42000 },
    { name: "Meera", salary: 38000 },
    { name: "Arjun", salary: 60000 }
];

// Loop through the employee array
for (let i = 0; i < employees.length; i++) {
    // Check if salary is greater than 40000
    if (employees[i].salary > 40000) {
        console.log(employees[i].name + ": ₹" + employees[i].salary);
    }
}

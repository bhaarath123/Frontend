// The blueprint definition
class Student {
    // The constructor sets up the properties when a new student is created
    constructor(studentName, studentAge, studentMark) {
        this.name = studentName;
        this.age = studentAge;
        this.mark = studentMark;
    }

    // A action/method that belongs to this blueprint
    displayDetails() {
        console.log(`Student: ${this.name} | Age: ${this.age} | Mark: ${this.mark}`);
    }
}

// Creating Object 1 using the blueprint
const student1 = new Student("Priya", 20, 85);

// Creating Object 2 using the blueprint
const student2 = new Student("Arjun", 22, 92);

// Calling the method for each student object separately
student1.displayDetails();
student2.displayDetails();

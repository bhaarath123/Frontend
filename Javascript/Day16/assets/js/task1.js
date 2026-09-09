const studentsArray = [];

const addStudentBtn = document.getElementById('add-student-btn');
const studentListContainer = document.getElementById('student-list-container');

const inputName = document.getElementById('student-name');
const inputAge = document.getElementById('student-age');
const inputCity = document.getElementById('student-city');

addStudentBtn.addEventListener('click', () => {
    const nameValue = inputName.value.trim();
    const ageValue = inputAge.value.trim();
    const cityValue = inputCity.value.trim();

    if (nameValue === "" || ageValue === "" || cityValue === "") {
        alert("Please completely fill out all student inputs before submitting.");
        return;
    }

    const studentObject = {
        name: nameValue,
        age: ageValue,
        city: cityValue
    };

    studentsArray.push(studentObject);

    renderStudentsList();

    inputName.value = "";
    inputAge.value = "";
    inputCity.value = "";
});

function renderStudentsList() {
    studentListContainer.innerHTML = "";

    studentsArray.forEach((student) => {
        const studentCardDiv = document.createElement('div');
        studentCardDiv.classList.add('student-card');

        studentCardDiv.innerHTML = `
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Age:</strong> ${student.age}</p>
            <p><strong>City:</strong> ${student.city}</p>
        `;

        studentListContainer.appendChild(studentCardDiv);
    });
}

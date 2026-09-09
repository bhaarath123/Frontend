const employeesArray = [];

const addEmpBtn = document.getElementById('add-emp-btn');
const employeeTableBody = document.getElementById('employee-table-body');

const inputName = document.getElementById('emp-name');
const inputDept = document.getElementById('emp-dept');
const inputSalary = document.getElementById('emp-salary');

addEmpBtn.addEventListener('click', () => {
    const nameValue = inputName.value.trim();
    const deptValue = inputDept.value;
    const salaryValue = inputSalary.value.trim();

    if (nameValue === "" || deptValue === "" || salaryValue === "") {
        alert("Please completely fill out all employee inputs before submitting.");
        return;
    }

    const employeeObject = {
        name: nameValue,
        department: deptValue,
        salary: Number(salaryValue).toLocaleString()
    };

    employeesArray.push(employeeObject);

    renderEmployeesTable();

    inputName.value = "";
    inputDept.value = "";
    inputSalary.value = "";
});

function renderEmployeesTable() {
    employeeTableBody.innerHTML = "";

    employeesArray.forEach((employee) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>$${employee.salary}</td>
        `;

        employeeTableBody.appendChild(row);
    });
}

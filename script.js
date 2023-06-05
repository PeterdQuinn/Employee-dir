document.getElementById('employee-form').addEventListener('submit', addEmployee);

const employees = [
    {name: "Alice", role: "Senior Developer", skills: ["JavaScript", "HTML", "CSS"]},
    {name: "Bob", role: "Senior Developer", skills: ["Python", "Java", "C++"]},
    {name: "Charlie", role: "Senior Designer", skills: ["UX/UI Design", "HTML", "CSS"]},
    {name: "Diana", role: "Senior Designer", skills: ["UX/UI Design", "JavaScript", "React"]},
    // add more employee objects...
];

function addEmployee(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const skills = document.getElementById('skills').value.split(',');

    const newEmployee = {name: name, role: role, skills: skills};
    employees.push(newEmployee);

    updateEmployeeList();
}

function updateEmployeeList() {
    const list = document.getElementById('employee-list');
    list.innerHTML = '';

    for (let i = 0; i < employees.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `<h2>${employees[i].name}</h2><p>${employees[i].role}</p><p>${employees[i].skills.join(', ')}</p><button onclick="deleteEmployee(${i})">Delete</button>`;
        list.appendChild(li);
    }
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    updateEmployeeList();
}

// Populate the list with the initial employees
updateEmployeeList();

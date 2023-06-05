document.getElementById('employee-form').addEventListener('submit', addEmployee);
document.getElementById('search-button').addEventListener('click', searchEmployees);

let employees = [];

// Check if employee data exists in local storage
const storedEmployees = localStorage.getItem('employees');
if (storedEmployees) {
  employees = JSON.parse(storedEmployees);
} else {
  // If no data exists, initialize with default employees
  employees = [
    { name: "Alice", role: "Senior Developer", skills: ["JavaScript", "HTML", "CSS"] },
    { name: "Bob", role: "Senior Developer", skills: ["Python", "Java", "C++"] },
    { name: "Charlie", role: "Senior Designer", skills: ["UX/UI Design", "HTML", "CSS"] },
    { name: "Diana", role: "Senior Designer", skills: ["UX/UI Design", "JavaScript", "React"] }
  ];
}

function addEmployee(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const skills = document.getElementById('skills').value.split(',');

  const newEmployee = { name: name, role: role, skills: skills };
  employees.push(newEmployee);

  updateEmployeeList();
  saveEmployeesToLocalStorage();
}

function updateEmployeeList() {
  const list = document.getElementById('employee-list');
  list.innerHTML = '';

  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    const li = document.createElement('li');
    li.innerHTML = `
      <h2>${employee.name}</h2>
      <p>${employee.role}</p>
      <p>${employee.skills.join(', ')}</p>
      <button onclick="editEmployee(${i})">Edit</button>
      <button onclick="deleteEmployee(${i})">Delete</button>
    `;
    list.appendChild(li);
  }
}

function searchEmployees() {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchInput) ||
    employee.role.toLowerCase().includes(searchInput) ||
    employee.skills.some(skill => skill.toLowerCase().includes(searchInput))
  );

  if (filteredEmployees.length > 0) {
    employees = filteredEmployees;
  } else {
    employees = [];
  }

  updateEmployeeList();
}

function saveEmployeesToLocalStorage() {
  localStorage.setItem('employees', JSON.stringify(employees));
}

function editEmployee(index) {
  const employee = employees[index];
  const name = prompt("Enter the employee's name:", employee.name);
  const role = prompt("Enter the employee's role:", employee.role);
  const skills = prompt("Enter the employee's skills (comma-separated):", employee.skills.join(','));

  if (name && role && skills) {
    employee.name = name;
    employee.role = role;
    employee.skills = skills.split(',');

    updateEmployeeList();
    saveEmployeesToLocalStorage();
  }
}

function deleteEmployee(index) {
  employees.splice(index, 1);
  updateEmployeeList();
  saveEmployeesToLocalStorage();
}

updateEmployeeList();

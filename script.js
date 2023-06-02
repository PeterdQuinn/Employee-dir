document.getElementById('generate-button').addEventListener('click', generateEmployee);

const employees = [
    {name: "Alice", role: "Senior Developer", skills: ["JavaScript", "HTML", "CSS"]},
    {name: "Bob", role: "Senior Developer", skills: ["Python", "Java", "C++"]},
    {name: "Charlie", role: "Senior Designer", skills: ["UX/UI Design", "HTML", "CSS"]},
    {name: "Diana", role: "Senior Designer", skills: ["UX/UI Design", "JavaScript", "React"]},
    // add more employee objects...
];

function generateEmployee() {
    const employee = employees[Math.floor(Math.random() * employees.length)];
    
    const li = document.createElement('li');
    li.innerHTML = `<h2>${employee.name}</h2><p>${employee.role}</p><p>${employee.skills.join(', ')}</p>`;
    document.getElementById('employee-list').prepend(li);
}

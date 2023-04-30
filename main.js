import getStudents from "./getSudent.js";
import createTable from "./createTable.js";
import filterTable from "./filterTable.js";

function init() {
  const tableBody = document.querySelector('#studentsTable tbody');

  const students = getStudents();

  createTable(tableBody, students);

  const searchInput = document.querySelector('#search');
  
  
  searchInput.addEventListener('input', (event) => {
    const searchValue = event.target.value;

    const filteredStudents = filterTable(students, searchValue);

  
    tableBody.innerHTML = '';
    createTable(tableBody, filteredStudents)
  })
  
};

init();


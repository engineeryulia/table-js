import filterTable from "./filterTable.js";
import createTable from "./createTable.js";

async function fetchStudents() {
  const response = await fetch('./getStudents.json')
  const students = await response.json();
  return students;
}

async function init () {
  const tableBody = document.querySelector('#studentsTable tbody');
  const students = await fetchStudents();

  //const students = getStudents();

  createTable(tableBody, students);

  const searchInput = document.querySelector('#search');

  searchInput.addEventListener('input', (event) => {
    const searchValue = event.target.value;
    
  const filteredStudents = filterTable(students, searchValue)

    tableBody.innerHTML = '';
    createTable(tableBody, filteredStudents)

  });
  
}

init();


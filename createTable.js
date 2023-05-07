function createCell(content){
  const cell = document.createElement('td');
  cell.textContent = content;
  return cell;
}


export default function createTable(tableBody, students) {
  students.map((student) => {
    const row = document.createElement('tr')
    row.appendChild(createCell(student.id))
    row.appendChild(createCell(student.firstName))
    row.appendChild(createCell(student.lastName))
    row.appendChild(createCell(student.grade))
    tableBody.appendChild(row);
  })
  // students.forEach((student) => {
  //   const row = document.createElement('tr');

  //   const idCell = document.createElement('td');
  //   idCell.textContent = student.id;
  //   row.appendChild(idCell);

  //   const firstNameCell = document.createElement('td');
  //   firstNameCell.textContent = student.firstName;
  //   row.appendChild(firstNameCell);

  //   const lastNameCell = document.createElement('td');
  //   lastNameCell.textContent = student.lastName;
  //   row.appendChild(lastNameCell);

  //   const gradeCell = document.createElement('td');
  //   gradeCell.textContent = student.grade;
  //   row.appendChild(gradeCell);

  //   tableBody.appendChild(row);
  // })
  


}
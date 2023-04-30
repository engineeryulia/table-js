export default function filterTable(students, searchValue) {
  const filteredStudents = students.filter((student) => {
    return student.lastName.toLowerCase().includes(searchValue.toLowerCase())
  })
  return filteredStudents;
}
function showYoungestStudent(students) {
  var youngest = students[0];
  for (var i = 1; i < students.length; i++) {
    if (students[i].age < youngest.age) {
      youngest = students[i];
    }
  }
  console.log(youngest.name);
}
var students = [
  { name: 'John', age: 60 },
  { name: 'Bill', age: 21 },
  { name: 'Kate', age: 22 },
];
showYoungestStudent(students);

module.exports = showYoungestStudent;

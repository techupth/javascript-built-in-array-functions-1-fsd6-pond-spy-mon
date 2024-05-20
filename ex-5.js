const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
   return students.reduce(function(accumulator, student) {
    return accumulator + student.score / students.length
  }, 0);
}

console.log(getAverageStudentScore(students)); // Output: 87.5

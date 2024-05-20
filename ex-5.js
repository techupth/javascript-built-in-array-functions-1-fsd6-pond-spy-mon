const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  return students.reduce(function (accumulator, student){
    return accumulator + student.score / 4
  }, 0)
}

console.log(getAverageStudentScore(students));


// let getAverageStudentScore = students.reduce(function (accumulator, student) {
//   return accumulator + student.score / 4
// }, 0)
//   // Start coding here
 
  
// console.log(getAverageStudentScore); ; // Output: 87.5







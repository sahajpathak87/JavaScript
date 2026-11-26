// Q5: Display grade based on marks (A, B, C, D, F)
const marks = 76;
let grade;

if (marks < 0 || marks > 100) {
  grade = "Invalid marks";
} else if (marks >= 80) {
  grade = "A";
} else if (marks >= 70) {
  grade = "B";
} else if (marks >= 60) {
  grade = "C";
} else if (marks >= 50) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`Marks: ${marks} -> Grade: ${grade}`);

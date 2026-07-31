const student={
    name:"Anish",
    age:43,
    branch:"CSE"
}
const newStudent={
    ...student,
    sec:"A"
}
console.log("new object name=",newStudent.name);
console.log("new object age=",newStudent.age);
console.log("new object branch=",newStudent.branch);
console.log("new object section=",newStudent.sec);
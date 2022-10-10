const student = {
    id : 238,
    name : 'Tohin',
    marks : {
        math : 85,
        english : 80,
        Bangla : 82,
    }
}

// console.log(student);
// console.log(student.marks);
// console.log(student.marks.math);
// console.log(student['marks']['math']);

const subject = 'math';

console.log(student['marks'][subject]);
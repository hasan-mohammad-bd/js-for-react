//3 ways to access object property.

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const theAge = "age";
console.log(student.age);
console.log(student["age"]);
console.log(student[theAge]);
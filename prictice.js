//fundamentals
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

//es6
const numbers = [89, 35, 98, 12];
const student2 = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

//template string.
const about =  `
his name is ${student2.name} his age is ${student2.age}, his movie names are ${student2.movies}. the number the got is ${numbers[0]}.
`
console.log(about);
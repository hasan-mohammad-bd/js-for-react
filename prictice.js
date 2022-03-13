//fundamentals
//3 ways to access object property.
//============================================

const student = {
  name: "Salib Khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

const theAge = "age";
console.log(student.age);
console.log(student["age"]);
console.log(student[theAge]);

//es6
const numbers = [89, 35, 98, 12];
const student2 = {
  name: "Salib Khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

//template string.
//============================================
const about = `
his name is ${student2.name} his age is ${student2.age}, his movie names are ${student2.movies}. the number the got is ${numbers[0]}.
`;
console.log(about);

//arrow function.
//============================================
const getFiftyFive = () => 55;
console.log(getFiftyFive());

//spread operator
//============================================
const newNumbers = [...numbers];
const currentNumbers = [...numbers, 55];
console.log(currentNumbers);

//array function.
const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sungalss", price: 300, brand: "ray", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

//map: go through all array property
//============================================
const brands = products.map((product) => product.brand);
console.log(brands);

//filter: go filter out which can goes through the filter.
//============================================
const lowPriceItems = products.filter((product) => product.price < 2000);
console.log(lowPriceItems);

//forEach. its like map but dont give an array output.
//============================================
const productsPrice = products.forEach((product) => {
  console.log(product.price);
});

//find: find is find only one result from an array.
//============================================

const special = products.find((p) => p.name.includes("n"));
console.log(special);

//array destruction

const [first, second] = [1, 2];
console.log(first);

//object destruction;
//===============================================
const employee = {
    ide: "VS Code",
    designation: "developer",
    machine: "mac",
    languages: ["html", "css", "js"],
    specification: {
      height: 66,
      weight: 67,
      address: "kumarkhali",
      drink: "water",
      watch: {
        color: "black",
        price: 500,
        brand: "garmin",
      },
    },
  };

  const {color, price, brand} = employee.specification.watch;
  console.log(color);

  //optional chining.
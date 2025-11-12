// biến var(ES5) có hoisting, gán lại giá trị, khai báo lại, phạm vi function scope
var name = "NinhND";
var email = "ninhnd@liftsoft@gmail.com";
var number = 10;

// biến let(ES6) có hoisting, gán lại giá trị, không khai báo lại, phạm vi block scope
let name = "Ninh";
name = "NinhND"; // works

// biến const(ES6) là hằng số không đổi giá trị, không gán lại giá trị, không khai báo lại, phạm vi block scope
const name = "Ninh";
name = "NinhND"; // error assigment to constant variable

//reserved Keyword
//const import = 'ninhND' // error beacause import is a reserved keyword

//Name Variable

const ten = "NinhND"; //bad
const name = "NinhND"; // good

//true/false variable

let hasValid = true;
let isSelect = false;

//single noun

const student = {
  name: "NinhND",
};

//plural noun
const students = [].map((student) => console.log(student));
const studentList = [].map((student) => console.log(student));

//Case styles

//camelCase: variable, function  <----> example: let name, function name
//UPPER_CASE: constans <------> example: PI, API_URL
//PascalCase: class, component <-----> exxample: Class Student, Function Blog
//kebab-case: CSS class name <-----> example: container-nav

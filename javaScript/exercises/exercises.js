// console logs
// console.log(10);
// console.log('Hello world');
// console.log(10 + 10);
// console.log(5 * 5);
// console.log(10 - 6);
// console.log(10 / 6);
// console.log(5 + 2 * 7);
// console.log("Hello " + " Everyone");

// variables
// let name = "Almayo";
// console.log(name);
// let age = 20;
// age = 30;
// console.log(age);

// constants
// const birthYear = 1998;
// console.log(birthYear);
// birthYear = 2000; ERROR ❌ 

// Exercise 

// hey i am dani and i am 27 years old and i live in israel

// let name = 'Dani';
// let age = 27;
// const country = 'Israel';

// backticks
// OR
// template literals

// console.log("Hey I am " + name + " and i am " + age + " years old, and i live in " + country);

// console.log(`Hey I am ${name} and i am ${age} years old, and i live in ${country}`);

// console.log(`In 5 years i will be ${age + 5}`);

// if conditions;
// > 
// <

// console.log(10 > 8);
// console.log(10 < 8);


// if(condition) {
//     // הקוד שירוץ אם התנאי נכון
// }else if (condition) {
//    // אם הראשון לא נכון וזה כן
// }else {
//    // אם שום דבר לא נכון
// }

// let age = 20;

// if(age < 18) {
//     console.log('אתה רשאי להיכנס כי אתה בחור על הכיפאק');
// }else {
//     console.log('אתה לא רשאי להיכנס כי אתה לא על הכיפאק');   
// }


// console.log(true && false);

// let age = 20;
// let hasTicket = true;

// = השמה - asignment
// == שווין - equality
// === שווין - equality

// console.log(5 == "5"); // true
// console.log(5 === "5"); // false // strict equality



// if(age > 18 && hasTicket === false) {
//     console.log('you can enter');
// }else {
//     console.log('you cannot enter');
// }


// const randomNumber = Math.random();
// let computerMove = '';

// 0.333333333333

// functions


// let firstName = "Almayo";

// function name() {
//     console.log(firstName);
// }

// name();


// function giveNumber() {
//  return 5; // וזהו
// }

// const result = giveNumber();
// console.log(result);


// function number(num) {
//     console.log(num);
// }

// number(10);
// number(20);
// number(30);
// number(40);
// number(50);
// number(60);
// number(70);
// number(80);
// number(90);
// number(100);

// objects

// key: value

// const user = {
//   name: 'Almayo',
//   age: 28,
//   city: 'Netanya',
// }

// console.log(user);
// console.log(user.city);

// const user = {
//   name: 'Almayo',
//   age: 28,
//   city: 'Netanya',
// }

// user.age;
// java script 
// Object 
// notation

// console.log(user);
// const userStringified = JSON.stringify(user);
// console.log(userStringified);
// const parsedUser = JSON.parse(userStringified);
// console.log(parsedUser);

// score.wins++;❌
// const score = '{wins: 1, losses: 0, ties: 1}';❌
// score.wins // undefined;❌

// DOM - Document object model

// console.log(document.body);
// console.log(document.title = 'אלמיהו הכי מגניב בארץ');
// console.log(document.body.innerHTML = 'מה שבאלי');  
// console.log(document.querySelector('.rock'));
// const rockBtn = document.querySelector('.rock');
// rockBtn.innerHTML = 'אלמיהו הכי מגניב בארץ';
// console.log(rockBtn);

// functions 

// function numbers1() {
//     console.log(5);
// }

// const numbers2 = function () {
//     console.log(5);
// }

// numbers2();

// const numbers3 = () => {
//     console.log(5);
// }

// numbers3();

// const numbers4 = (num1, num2) => num1 + num1;
// const prices = (price, quantity) => price * quantity; //  

// console.log(prices(50, 3));
// console.log(prices(60, 8));
// console.log(prices(90, 8));


console.log(!false);
console.log(!true);


// single line comment
/**Multiple line comment */
// variable(only CharacterData, num, $ _)
// var let const

// creating variable = assigning value
// var FirstName = "JBL";
// let add = "Australian Syd";
// const dob = "1992";

// console.log(FirstName);
// console.log(add, dob);

// // overwrite
// // to overwrite for const we use let
// FirstName = "Taylor Swift";
// add = "Perth";
// dob = "1991";

// console.log(FirstName);
// console.log(add, dob);

// JS operators

// let a = 4;
// let b = 6;

// // const addition
// // console.log(34 + 26);
// // const c = a + b;
// // console.log(c);

// // const multiple
// const c = a ** b;
// console.log(c);

// comparison
// const a = 5;
// const b = 8;

// // const result = a == b;
// const result = a <= b;
// console.log(result);

//===== JS data types
// primitives n references types
// undefined ,  not defined in system memory
// null ,  defined in system memory but no assigned

// const val = "Jee";
// console.log(typeof val, val);

// constant val = null;  dead memory cells

// references types
// object  // {key:"value"}
// const person = {
//   name: "JL",
//   add: "syd",
//   career: {},
// };

// const args = [];
// console.log(person);

// const person = {
//   name: "jj",
// };

// console.log(person.mane);

// const anotherP = person;
// console.log(anotherP);

// person.name = "sam smith";

// console.log(person, anotherP);

// ==== JS math object
// const ans = Math.PI;
// const ans = Math.round(4.436543);

// console.log(ans);

// Math.PI;

// Math.round(4.7);

// Math.pow(8, 2);

// Math.sqrt(64);

// Math.ceil(4.4);

// Math.floor(4.7);

// Math.min(0, 150, 30, 20, -8, -200);

// Math.max(0, 150, 30, 20, -8, -200);

// Math.random();

// If
// If else
// Else if
// Switch

// const pet = 'bird';

// if (pet == 'bird'){
//     console.log('sing');
// }else if(pet == 'dog')  {
//     console.log('Wof')
// }else(pet == 'cat'){
//     console.log('meow')
// };

// switch

// const pet = "cat";
// switch (pet) {
//   case "cat":
//     console.log("meow");
//     break;

//   case "cat":
//     console.log("meow");
//     break;

//   case "cat":
//     console.log("meow");
//     break;
// }

// // If
// const age = 27;
// const g = "f";

// if (age >= 18 && g == "f") {
//   console.log("welcome");
// }

// condition ? "true, result" : "false, result"
// age >= 18 ? console.log("welcome") : console.log("Not welcome");

// // error handling
// try {
//   const name = "My"; //code block
//   console.log(love);
// } catch (error) {
//   console.log(error.message); //catch error and handle
// } finally {
//   console.log("logging...."); //run finally regardless
// }

// const name = "J";

// try {
//   throw new Error("INvalid content");
//   setting error message.
//   code block
//   const name = "J";
//   console.log(name);
// } catch (error) {
//   // catch error and handle
//   console.log(error.message);
// } finally {
//   // run finally regardless
//   console.log("loading....");
// }

// JS Scheduling

// setTimeout
// ->clearTimeout

// console.log("before det time out");
// setTimeout{()=>{}, 1000}  //1s
// console.log("before det time out");
// setTimeout{()=>{
//     console.log("from set time out");
// }, 1000}  //1s

// // setInterval
// // ->clearInterval

// let i =0;
// setInterval({()=>{
//     console.log(i++);

// }})

// JS - ES6;

// Let, Const
// Template literals
// const fn = "J";
// const ln = "Lim";
// const fullN = fn + ln;
// const addr = "Syd";

// const bio = "Hi, I'm " + fn + " and I'm from " + add;

// console.log(fullN);
// const a = "5";
// const b = 6;
// const c = a + b;
// console.log(c);
// if (a === 5) {
//   console.log("you pass");
// }

// Arrow function
// Destructuring
// Default + Rest + Spread

// function of JS
// function lifecycle
// create
// console.log("before function");
// function speak() {
//   console.log("hi hello welcome");
// }
// console.log("after function");

// call

// console.log(speak);
// invoke/execute
// speak();
// speak();
// speak();

// arrow function
// const speak = () => {
//   console.log("Hi there");
// };
// speak();

// ====loops

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i % 2 === 0) {
//     continue;
//   }

//   if (i == 5) {
//     break;
//   }

//   console.log(i);
//   1000 lines of code

// for(i = 0; i < cars.length; i++)
// for/in for (x in person) → for object
// for /of for (x of cars) → for array
// while (condition)
// do/while | do{}while()
// Break out of loop
// Continue, in loop to skip 1 loop
// Break, break out the loop or switch

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do / while
// let i = 0;
// do {
//   console.log(i++);
// } while (i > 10);

// challenge 0;
// console.log("1. first one");

// if (answer == "Nepal") {
//   console.log("You're correct")
// }

// Set time out

// //Data Manipulation
// Number : safe no. range is -2^53 -1 to 2^53 -1

// const num="33";

// downcast
// const ans = +num;
// NaN = not a number

// const ans = parseInt(num);
// const ans = parseFloat(num);

// if ans is not "not a number" === ans is a Number
// isNaN(ans);
// test

// console.log(typeof ans, ans, isNaN(12)); //False

////String manipulation
// const str = `Boom`;

// Escape character
// const str = "hello \"my\" programmers!";
// const str = `hi i\'m "Jee", thank\` you;

// const name = "JVN";
// const age = 22;
// const str = "Hello guys" + name + "I'm " + age + "years old";
// const str = `Hi my name is ${name} i'm ${age} years old`;

// length
// const value = str.length();

//toUpperCase and toLowerCase
//const value = str.toUpperCase();
//const value = str.toLowerCase();

//indexOf, lastIndexOf, search

// const value = str[6];
// const value = str.indexOf("name");
// const value = str.lastIndexOf("a");

// const value = str.search("JVN");

// slice, substring, substr
// const value = str.slice(3, 4);
// const value = str.slice(3);
// const value = str.slice(-3);

// const value = str.substring(3,5);

// const value = str.replace("JVN", "Jee");
// const value = str.replace("i", "u");
// const value = str.replaceAll("i", "u");

// to remove the white space
// const value = str.trim();
// const value = str.concat(" => mor info coming soon");

// charAt, [], split
// const value = str.includes("JVN");
// const value = str.charAt(6); will give you the character.
// const value = str.charCode(6); gives you binary(asci) code.

// const value = str.split(""); //convert string into array/ will not give you the character.

// console.log(str);
// console.log(value);

// const arg = ["jkl", 45, true, undefined, NaN, ["jjj", 55], {}, () => {}];
// console.log(agr);

// const fruits = ["banana", "apple", "orange", "pear"];
// const veg = ["cauliflower", "tomato", "spinach"];

// console.log(fruits);
// console.log(fruits, fruits.length);

// fruits.push("Mango"); //adds the item at the end.
// fruits.unshift("pears"); //adds in the first.
// fruits.pop();

// const value = fruits.shift();

// const value = fruits.slice(1, 3);
// const value = fruits.splice(1, 3); // modifies original , 1 is index, and gives 3 values.

// const value = fruits.splice(3, 0, "watermelon");

// const value = fruits.toString().split(",");

// const value = fruits.join("|");
// const value = fruits.indexOf("orange");

// console.log(fruits, value);
// console.log(fruits);

// console.log(fruits, sort());

// console.log(
//   fruits,
//   sort((a, b) => b - a)
// );

// console.log(fruits, reverse());

// for (let i= 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// fruits.forEach(item, i) => {
//     console.log(item, i);
// }
// //
// /
// /
// /
// /
// /const arg = fruits.filter((item) => item.includes ("p");
// /
// /
// /
// /
// /
// /

// const arg = [34, 344, 543, 323];

// const total = arg.reduce((subtotal, item) => {
//   return subtotal + item;
// }, 0);
// console.log(total);

// const ans = fruits.every((item) => item.includes("p"));

// for (let item of fruits) {
//   console.log(item);
// }

// console.log(ans);

// const data = new Array(100).fill("💕 😁");
// console.log(data);

// #C1
//1. create an array of 50 numbers range between 1 and 100 through programming.
//2. sort the array in descending order.an
//3. get the total value of the array.
//4. from the original array created created above, create another two arrays that contains even or odd numbers individually.above
//5. remove the duplicate number for the original array.

// let mY = Array.apply(null, Array(50)).map(function (y, i) {
//   return i;
// });
// console.log(mY.length);
// console.log(mY);

// const size = 50;
// const array = [];

// // for (let i = 0; i < 50; i++) {
// //   array.push(i);
// // }
// // console.log(array);

// function func() {
//   for (let i = 0; i < 50; i++) {
//     array.push(i);
//   }
//   console.log(array);

//   let reverse = arr.reverse();
//   console.log(reverse);
// }

// function arrSort(array) {
//   arrSort((a, b) => a - b);
//   arr.reverse();
//   return array;
// }
// console.log(arrSort(array));

// function arrSort(array) {
//   arrSort((a, b) => b - a);
//   return i;
// }
// console.log(arrSort(array));

// const numArr = [];

// for (let i = 0; i < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1; //0 - 0.9999;
//   numArr.push(num);
// }

// // 2. descending order
// numArr.sort((a, b) => b - a);
// console.log(numArr);

// // 3. total value
// const total = numArr.reduce((sutta, item) => sutta + item, 0);
// console.log(total);

// // 4. Two arrays
// const evenNumber = numArr.filter((item) => item % 2 === 0);
// console.log(evenNumber);

// //5. odd
// const oddNumber = numArr.filter((item) => item % 2 !== 0);
// console.log(oddNumber);

// // 6. remove duplicate
// // const noDupeArg = [...new Set(numArr)];
// const noDupeArg = numArr.filter((item, i) => i === numArr.indexOf(item));
// console.log(noDupeArg);

//#C2.
// 1. create an array of 50 unique random numbers from 0 to 100 through programming.

// const NArr = [];

// for (let i = 0; i < 51; i++) {
//   const ranNuM = Math.floor(Math.random() * 100) + 1;
//   if (NArr.includes(ranNuM)) {
//   }

//   console.log(ranNuM);
// }

// const uniqArg = []; //length is 0
// let i = 0;
// while (uniqArg.length < 50) {
//   const num = Math.floor(Math.random() * 100) + 1;

//   if (!uniqArg.includes(num)) {
//     uniqArg.push(num);
//   }
//   console.log(i++);
// }
// console.log(uniqArg.sort());

// JS = Data Manipulation

// objects
// property, assign, delete, convert to array, loop

// const obj = {
//   name: "JVN",
//   contact: 456789,
// };
// console.log(obj);

// const person = {
//   name: "Aa",
//   num: 789,
//   add: "20 st",
//   married: false,
//   skills: ["html", "css", "js"],
//   parent: {
//     F: "harry",
//     M: "Mary",
//   },
// };

// const value = person["name"];
// const value = person.name;
// const value = person.name.m;
// const value = person.skills[2];

// person.age = 44; //addition
// person.num = "hundred"; //overwrite

// person.parent.gar = "someone";

// person.skills.push("git");

// delete person.parent;

// console.log(person);

// copying

// const p1 = {
//   name: "Kale",
//   age: 22,
// };

// const p2 = p1; // referencing to the same data in the memory
// const p2 = Object.assign({}, p1);
// const p2 = { ...p1 };

// p1.age = 44;
// console.log(p1);
// console.log(p2);

// for (let key in p1){
//     const value = p1[key];
//     console.log(key value);
// }

// const keys = Object.keys(p1);
// const values = Object.values(p1);
// console.log(keys, values);

// const entries = Object.entries(p1);
// console.log(entries);

// ["name", 23, "number", 98].forEach((item, i) => {
//   console.log(item, i);
// });
// ["name", 23, "number", 98].filter((item, i) => {
//   console.log(item, i);
// });

// [33, 23, 42, 3]
//   .reduce((acc, item) => {}, 100)
//   [("name", 23, "number", 98)].every((item, i) => {
//     console.log(item, i);
//   });

// arrow function
// const functionName = (dee, Why) => {
//   console.log(dee, Why);
// };

// const output = functionName("My address", 543);
// console.log(output);

//Destructuring
// const p1 = {
//   name: "Pre",
//   age: 22,
//   contact: 6789,
//   parents: {
//     F: "John",
//     M: "Mary",
//   },
// };

// const bio = `I'm writing a bio of ${p1.name}. He is ${p1.age} years old.`;
// console.log(bio);

// const p2 = {
//   name: "Priest",
//   age: 32,
//   contact: 67894,
//   parents: {
//     F: "Johnny",
//     M: "Marry",
//   },
// };
// const bio2 = `I'm writing a bio of ${p1.name}. He is ${p1.age} years old.`;
// console.log(bio);

////SPREAD
// const fullInfo = {
//   p1,
//   career.
// };
// console.log(fullInfo);

// const fullInfo = {
//   ...p1,
//   ...career.
// };
// console.log(fullInfo);

// const arr1 = [12, 1234, 24, 533];
// const arr2 = ["af", "er", "ek"];
// const newArg = [...arr1, ...arr2];

// console.log(newArg);

////Date
// const nowTime = new Date();
// const nowTime = Date.now() / (1000 * 60 * 60 * 24 * 365); //1700956800080 //53.93699250069761

// const dt = new Date();
// const timing = dt.toDateString();
// const timing = dt.toLocaleDateString();
// const timing = dt.getDate();
// const timing = dt.getDay();
// const timing = dt.getMonth();
// console.log(timing);

// const dt = new Date("1990-12-5");
// const timing = dt.getFullYear();
// const timing = dt.getDate();
// console.log(timing);

////Set methods
// console.log(dt.toLocalDateString());
// dt.setDate(getDate() + 6);
// console.log(dt.toLocalDateString());

// const today = new Date();

//#C3
//Create food object that contains the name and expiry date of the food.

const foods = [
  {
    name: "A2 Milk",
    exp: "2023-11-14",
  },
  {
    name: "Tuna",
    exp: "2023-11-24",
  },
];

// const milk = {
//   name: "A2 Milk",
//   exp: "2023-11-14",
// };

// const fish = {
//   name: "Tuna",
//   exp: "2023-11-24",
// };
//create a function that takes food object that is created above and return on the following:
const aDay = 1000 * 60 * 60 * 24;

const checkExp = ({ name, exp }) => {
  // console.log(name, exp);

  const today = Date.now();
  const expDate = new Date(exp).getTime();

  const diffDay = (expDate - today) / aDay;
  if (diffDay < 1) {
    return `$(name) is expired ${Math.floor(Math.abs(diffDay))} days ago.`;
  } else {
    return `you  have ${Math.floor(diffDay)} days to use the ${name}}`;
  }

  // console.log(diffDay);
  // console.log(today, expDate);
};
//-1. If food is expired: Milkshake is expired 4 days ago.
//-2. If not expired: you have 10 days before the product expires.
foods.forEach((item) => {
  const expiryData = checkExp(item);
  console.log(expiryData);
});
const milkInfo = checkExp(milk);
console.log(milkInfo);

// const food1 = {
//   name: "Milkshake",
//   expiry: new Date(2020 - 12 - 12),
// };

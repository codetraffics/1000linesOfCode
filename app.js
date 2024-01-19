// CHALLENGE 1
// 1. Create variable name (name) & store your name.
// 2. Create variable name (whatDoYouWannaBecomeInYourLife) & store "programmer"
// 3. Create variable namae (gender) & store your gender
// 4. Create variable name (twitterHandle) & store your twitter handle
// 5. Finally log all variables to the console

// let name = "Elvis Boateng";
// let whatDoYouWannaBecomeInYourLife = "programmer";
// let gender = "male";
// let twitterHandle = "@codetraffics";

// console.log(name);
// console.log(whatDoYouWannaBecomeInYourLife);
// console.log(gender);
// console.log(twitterHandle);

// CHALLENGE 2
// 1. Create variable nam (firstFavNum) & store your favorite number.
// 2. Create variable name (secondFavNum) & store your second fav number.
// 3. Add (firstFavNum & secondFavNum).
// 4. Subtract (firstFavNum & secondFavNum).
// 5. Multiply (firstFavNum & secondFavNum).
// 6. Divide (firstFavNum & secondFavNum).
// 7. Check (firstFavNum Mod secondFavNum).
// 8. Check the power of (firstFavNum)

// let firstFavNum = 9;
// let secondFavNum = 18;

// console.log(firstFavNum + secondFavNum);
// console.log(firstFavNum - secondFavNum);
// console.log(firstFavNum * secondFavNum);
// console.log(firstFavNum / secondFavNum);
// console.log(firstFavNum % secondFavNum);
// console.log(firstFavNum ** 2);

// firstFavNum = 10;
// secondFavNum = "10";

// console.log(firstFavNum > secondFavNum);
// console.log(firstFavNum < secondFavNum);
// console.log(firstFavNum >= secondFavNum);
// console.log(firstFavNum <= secondFavNum);
// console.log(firstFavNum === secondFavNum);
// console.log(firstFavNum == secondFavNum);
// console.log(firstFavNum !== secondFavNum);
// console.log(firstFavNum != secondFavNum);

// let firstName = "         HuXn        ";
// let secondName = "codetraffics";

// 1. Concatenation
// let fullName = firstName.concat(secondName);
// console.log(fullName);

// Append
// firstName += "is codetraffics";
// console.log(firstName);

// length
// console.log(firstName.length);

// 4. Cases
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

// 5. Slice
// console.log(firstName.slice(0, 3));

// 6. Split and Join
// console.log(firstName.split("").join(""));

// 7. Includes
// console.log(firstName.includes("h"));

// 8. Trim
// console.log(firstName.trim());

// Backticks
// fullName = `${firstName} ${secondName}`;
// console.log(fullName);

// CHALLENGE
// let favActorFirstName = "Mike";
// let favActorLastName = "Ross";
// let fullName = `${favActorFirstName} ${favActorLastName}`;
// let capitalize = fullName.toUpperCase();
// let message = `My favorite Actor is ${capitalize},`;
// message += ` his best show is Bail Out`;
// console.log(message);

// Convert string to number
// let money = "50";
// console.log(money);
// console.log(typeof money);

// money = parseInt(money);
// money = +money;
// money = Number(money);
// console.log(money);
// console.log(typeof money);

// Convert number to string
// let money = 50;
// console.log(money);
// console.log(typeof money);

// money = money.toString();
// money = String(money);
// console.log(money);
// console.log(typeof money);

// let lengthOfPassword = 8;
// let password;

// if (password == lengthOfPassword) {
//   console.log("Welcome");
// } else if (password <= lengthOfPassword) {
//   console.log("Password is too short");
// } else if (password >= lengthOfPassword) {
//   console.log("Too Long Password. Password should be 8 characters");
// } else {
//   console.log("Please provide a password");
// }

// CHALLENGE
// let fruit = "apple";

// switch (fruit) {
//   case "banana":
//     console.log("Banana is good");
//     break;
//   case "orange":
//     console.log("I am not a fan of oranges");
//     break;
//   case "apple":
//     console.log("How you like them apples");
//     break;
//   default:
//     console.log("I have never heard of that fruit");
// }

// let bulb = 0;

// switch (bulb) {
//   case 0:
//     bulb = "off";
//     console.log(`${bulb} is bulb`);
//     break;
//   case 1:
//     bulb = "on";
//     console.log("On");
//     break;
//   default:
//     console.log("Try again");
// }

// let day = "friday";

// switch (day) {
//   case "monday":
//     console.log(`Today is ${day}`);
//     break;
//   case "tuesday":
//     console.log(`Today is ${day}`);
//     break;
//   case "wednesday":
//     console.log(`Today is ${day}`);
//     break;
//   default:
//     console.log(`Please ${day} is not valid`);
// }

// let fruit = "Grapes";

// switch (fruit) {
// case "Banana":
//   console.log(`${fruit} is good`);
//   break;
// case "Orange":
//   console.log(`I am not a fun of ${fruit}`);
//   break;
// case "Apple":
//   console.log(`How you like them ${fruit}`);
//   break;
// default:
//   console.log(`I don't know about ${fruit}`);
// }

// for (let index = 0; index <= 5; index++) {
//   console.log(`${index + 1}. Hello world`);
// }

// While loop
// while loop is the same as for loop. Take the init out and add the increment expression to the block of statements

// let index = 1;

// while (index < 5) {
//   console.log(`${index} Hello World`);
//   index++;
// }

// let index = 0;

// do {
//   console.log(`${index}. Hello World`);
//   index++;
// } while (index <= 5);

// let index = 10;

// do {
//   console.log(`${index}. codetraffics`);
//   index++;
// } while (index <= 100);

// let index = 20;

// do {
//   console.log(`${index}. codetraffics`);
//   index++;
// } while (index <= 400);

// logical operators

// && || !

// let a = true;
// let b = false;
// let c = 5;

// &&
// console.log(a && b);
// // ||
// console.log(a || b);
// console.log(c < 2 && c > 2);
// console.log(c < 2 || c > 2);
// // !
// console.log(!a);
// console.log(!b);

// let password = "codetraffics";

// if (password.length >= 8 && !password.includes("traffics")) {
//   console.log("Valid password");
// } else {
//   console.log("Invalid password");
// }

// const numArr = [1, 2, 3, 4, 5];
// console.log(numArr);

// const stringArr = ["eat", "sleep", "code", "repeat"];
// console.log(stringArr);

// const nestedArr = [1, 2, 3, [4, 5, 6], 7, 8];
// console.log(nestedArr);
// console.log(nestedArr.length);
// // console.log(numArr[0]);

// console.log(nestedArr[0]);
// console.log(nestedArr[1]);
// console.log(nestedArr[2]);
// console.log(nestedArr[3]);
// console.log(nestedArr[4]);
// console.log(nestedArr[5]);
// console.log(nestedArr[6]);

// const fruits = [
//   "apples",
//   "pomegranates",
//   "mango",
//   "strawberries",
//   "pineapples",
//   "grapefruits",
// ];

// console.log(fruits);

// // Push
// console.log(fruits.push("oranges"));
// console.log(fruits);

// // Unshift
// console.log(fruits.unshift("banana"));
// console.log(fruits);

// // Pop
// console.log(fruits.pop());
// console.log(fruits);

// // Shift
// console.log(fruits.shift());
// console.log(fruits);

// const pl = ["JavaScript", "Golang", "TypeScript", "Python"];
// const numbers = [2, 1, 5, 8, 4];
// console.log(pl);
// console.log(numbers);

// console.log(pl.includes("Golang"));
// console.log(pl.join("-"));
// console.log(pl.reverse());
// console.log(pl.slice(0, 2));
// console.log(numbers.sort());

// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

// sayHello("codetraffics");

// function add(x, y) {
//   return x + y;
// }

// const multiply = function (p1, p2) {
//   return p1 * p2;
// };

// let result = multiply(3, 4);
// console.log(result);

// const res1 = add(3, 8);
// const res2 = add(709, 3);
// const res3 = add(9, 14);

// console.log(res1);
// console.log(res2);
// console.log(res3);

// console.log(`${2 + 4}`);

// let a = 4;
// let b = 2;
// console.log(`${a + b}`);
// let fName = "HuXn";
// let lName = "WebDev";

// console.log(`${fName} ${lName}`);
// console.log(`HuXn WebDev is
//          my
//                 teacher`);
// console.log(`${fName} ${lName} is my teacher`);

// console.log(`${3 + 4}`);
// let fName = "HuXn";
// let lName = "WebDev";

// function info() {
//   return `${fName} ${lName} is my teacher`;
// }

// console.log(`${info()}`);

// console.log(`${fName} ${lName} is my teacher`);

// console.log(`I
//   Love
//     You`);

// let fName = "HuXn";
// let lName = "WebDev";

// function info() {
//   return `${fName} ${lName} is my teacher`;
// }

// console.log(`${info()}`);

// function greetings(username) {
//   return `Good morning ${username}`;
// }

// console.log(greetings("HuXn"));

// const greet = (username) => `Goodmorning ${username}`;

// console.log(greetings("codetraffics"));

// Enhanced Object Literals
// function user(name, age, work) {
//   return {
//     name,
//     age,
//     work,
//   };
// }

// const huxn = user("HuXn", 19, "Programmer");
// console.log(huxn);

// const student = (studname, age, studclass, hobby) => {
//   return {
//     studname,
//     age,
//     studclass,
//     hobby,
//   };
// };

// const ama = student("Odeliah Gyimah", 8, "grade 3", "dancing");
// console.log(ama);
// const belinda = student("Efe Belinda", 7, "grade 3", "talking");
// console.log(belinda);
// const audrey = student("Audrey Confidence", 19, "JHS 3", "dancing");
// console.log(audrey);

// const car = (model, type, color, wheel) => {
//   return {
//     model,
//     type,
//     color,
//     wheel,
//     intro: () => {
//       console.log(`${model} ${type} ${color} ${wheel}`);
//     },
//   };
// };

// let model;
// let type;
// let color;
// let wheel;

// const car = (model, type, color, wheel) => {};
// const benz = car("2018 Benz", "Saloon car", "white", 4);
// console.log(benz.intro());

// const a = 1;
// const b = 2;
// const c = 3;

// const obj = { a, b, c };

// console.log(obj);

// Enhanced Object Literals

// const book = (title, author, copyright, ISBN) => {
//   return {
//     title,
//     author,
//     copyright,
//     ISBN,
//     intro: () =>
//       console.log(
//         `${author} wrote ${title}. The book's ISBN is ${ISBN} and it has a copyright of ${copyright}`
//       ),
//   };
// };

// const comSup = book(
//   "Commanding the Supernatural",
//   "David O. Oyedepo",
//   2006,
//   "978-2905-44-5"
// );
// const thnkBill = book(
//   "Think like a billionaire",
//   "Donald J. Trump",
//   2004,
//   "0-345-48140-2"
// );

// console.log(thnkBill.intro());
// console.log(comSup.intro());

// const lib = {
//   classScore: (a) => a * 0.3,
//   examScore: (b) => b * 0.7,
// };

// const firstScore = lib.classScore(78);
// console.log(firstScore);
// const secondScore = lib.examScore(95);
// console.log(secondScore);
// const finalScore = firstScore + secondScore;
// console.log(finalScore);

// console.log(lib.classScore(78));
// console.log(lib.examScore(95));
// console.log(lib.totalScore());

// const exFunc = (a, b, c, d) => {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   console.log("d", d);
// };

// exFunc(1, 2, 3, 4);

// const colors = ["red", "blue", "black", "white"];

// exFunc(...colors);

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [array1, array2];

// console.log(...array1, ...array2, 7, 8, 9);

// const towns = ["abuakwa", "tanoso", "maakro"];
// const manyTowns = ["accra", "spintex", "osu", ...towns];
// console.log(manyTowns);

// let people = ["ama", "belinda"];
// let morePeople = ["papa", people, "eliana"];
// let manyPeople = ["papa", ...people, "eliana"];
// console.log(morePeople);
// console.log(manyPeople);

// const obj1 = { x: 1, y: 2 };
// const obj2 = { z: 3 };
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// const profile = { gender: "male", community: "atasamanso" };
// const person1 = { fName: "Emma", lName: "Bobo", age: 37, ...profile };
// console.log(person1);
// const person2 = { fName: "Eric", lName: "Ok", age: 35, ...profile };
// console.log(person2);

// const student = {
//   class: 3,
//   school: "Emerald",
//   classTeacher: "Elvis",
//   classSize: 8,
// };

// const student1 = {
//   name: "Odeliah Gyimah",
//   age: 7,
//   hobby: "dancing",
//   ...student,
// };

// const student2 = {
//   name: "Papa Kwame",
//   age: 8,
//   hobby: "rapping",
//   ...student,
// };

// const student3 = {
//   name: "Belinda Efe",
//   age: 8,
//   hobby: "talking",
//   ...student,
// };

// console.log(student1);
// console.log(student1);
// console.log(student3);

// const someOne = (x, ...userData) => {
//   console.log(x);
//   console.log(userData);
// };

// // person("HuXn", "Webdev", 19, "programmer");

// const person = (firstName, lastName, age, ...hobbies) => {
//   console.log("First Name:", firstName);
//   console.log("Last Name:", lastName);
//   console.log("Age:", age);
//   console.log("Hobbies:", hobbies);
// };

// person("ama", "gyimah", 8, "dancing", "singing", "sports", "reading");

// const profile = { sex: "male", community: "atasamanso" };
// const { sex, community } = profile;
// console.log(sex, community);

// const student = {
//   sch: "Emerald",
//   grade: "Grade 3",
//   classTeacher: "Aki",
// };

// const { sch, grade } = student;
// console.log(sch, grade);

// const book = {
//   title: "think like a billionaire",
//   author: "donald j. thrump",
//   copyright: 2004,
// };

// const { title, author } = book;
// console.log(title, author);

// const livingRoom = {
//   television: "Samsung",
//   chair: "leather chairs",
//   table: "center table",
// };

// const { television, chair } = livingRoom;

// console.log(television, chair);

// const values = { x: 100, y: 200 };
// const { x: newX, y: newY } = values;
// console.log(newX);
// console.log(newY);

// const num = { x: 2, y: 3, z: 4, a: 5, b: 6, c: 7, d: 8, e: 9, f: 10 };
// const { x, y, z, ...rest } = num;
// console.log(x);
// console.log(y);
// console.log(y);
// console.log(rest);

// const sex = "male";

// const id = sex === "female" ? "she is a girl" : "He is a boy";
// console.log(id);

// const password = 2;

// const passwordChecker = (ps) => {
//   return password >= 8 ? "Strong password" : "Weak password";
// };

// const res = passwordChecker(password);
// console.log(res);

// const age = 10;
// const adultAge = 18;

// const isAdult = (ag) => {
//   return ag >= 18 ? "Is adult" : "Is not adult";
// };

// const results = isAdult(age);
// console.log(results);

// const isAdult = age >= adultAge ? "Is adult" : "Is not adult";
// console.log(isAdult);

// const car = {
//   type: "Range Rover",
//   year: "2018",
//   color: "black",
//   isFueld: true,
// };

// for (keys in car) {
//   console.log(`${keys}, : ${car[keys]}`);
// }

// const list = ["one", "two", "three", "four"];
// for (index in list) {
//   console.log(`${index} : ${list[index]}`);
// }

// const awura = {
//   name: "ama",
//   age: 19,
//   loveHer: "yes",
// };

// for (keys in awura) {
//   console.log(`${keys} : ${awura[keys]}`);
// }

// const numbers = [1, 3, 5, 7, 9, 2];
// for (num in numbers) {
//   console.log(`${num} : ${numbers[num]}`);
// }

// const belongings = ["tv", "chairs", "table", "sounds"];
// for (keys in belongings) {
//   console.log(keys, belongings[keys]);
// }

// For in loop for objects and arrays
// Objects

// const book = {
//   title: "Think Like a Billionaire",
//   author: "Donald J. Thrump",
//   publishing: {
//     publisher: "Dominion Books",
//     publishingDate: "2004",
//   },
// };

// for (keys in book) {
//   console.log(`${keys}: ${book[keys]}`);
// }

// let array = ["yellow", "black", "fair", "brown", "cyan"];
// for (index in array) {
//   console.log(`${index}: ${array[index]}`);
// }

// Tenary Operator
// let age = 12;
// let votingAge = 18;

// const voter =
//   age >= votingAge
//     ? `You are eligible to vote`
//     : `You are not eligible to vote. Please wait for ${
//         votingAge - age
//       } years to be elligible`;
// console.log(voter);

// const object = { a: 1, b: 2, c: 3 };
// for (properties in object) {
//   console.log(`${properties}: ${object[properties]}`);
// }

// const peoples = ["eric", "alfred", "aikins", "elvis", "gifty"];
// for (const people of peoples) {
//   console.log(people);
// }

// const cars = [
//   "land cruiser",
//   "range rover",
//   "civic",
//   "honda",
//   "benz",
//   "Jeep Wrangler",
// ];

// for (const car of cars) {
//   console.log(car);
// }

// const text = "HuXn";
// for (const char of text) {
//   console.log(char);
// }

// const colors = ["teal", "cyan", "blue", "green"];

// for (color of colors) {
//   console.log(color);
// }

// colors.forEach((color) => console.log(color));

// const programmers = ["HuXn", "Mike", "Jack", "JS Mastery", "Choundry"];

// programmers.forEach((programmer) => console.log(programmer));

// for (const programmer of programmers) {
//   console.log(programmer);
// }

// const hobbies = ["singing", "dancing", "sport"];
// hobbies.forEach((hobby) => console.log(`Hello ${hobby}`));

// const words = ["bird", "table", "chair", "table"];

// const capWords = words.forEach((word, index, arr) => {
//   arr[index] = word[0].toUpperCase() + word.substring(1);
// });

// console.log(words);

// const programmers = ["huxn", "jack", "john", "antonio"];

// const capProgrammers = programmers.forEach((programmer, index, arr) => {
//   arr[index] = programmer[0].toUpperCase() + programmer.substring(1);
// });

// console.log(programmers);

// const numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;

// const adder = (number) => {
//   sum += number;
// };
// numbers.forEach(adder);
// console.log(sum);

// Map
// let numbers = [1, 2, 3, 4, 5];
// let doubleNumbers = numbers.map((num) => num * 2);
// console.log(doubleNumbers);

// const names = ["ama", "yaw"];
// let listNames = names.map((name) => console.log(name));

// const numbers = [1, 23, 4, 67, 9];
// let sqrNumbers = numbers.map((number) => console.log(number * number));
// let divideNumbers = numbers.map((number) =>
//   console.log(number / (number * number))
// );

// let avgNumbers = numbers.map((number) => number / numbers.length);
// console.log(avgNumbers);

// let programmers = [
//   { firstName: "HuXn", lastName: "Webdev" },
//   { firstName: "Jack", lastName: "Herr" },
//   { firstName: "JS", lastName: "Mastery" },
// ];

// let programmerName = programmers.map((programmer) => {
//   return [programmer.firstName, programmer.lastName];
// });
// console.log(programmerName);

// const books = [
//   { title: "Think and Grow Rich", author: "Napoleon Hill", country: "USA" },
//   {
//     title: "Think like a Billionaire",
//     author: "Donald J Thrump",
//     country: "USA",
//   },
//   {
//     title: "Commanding the Supernatural",
//     author: "David Oyedepo",
//     country: "Nigeria",
//   },
// ];

// let results = books.map((book) => {
//   return book.title;
// });
// console.log(results);

// const songs = [
//   { name: "Lucky You", duration: 4.3 },
//   { name: "Just Like You", duration: 5.3 },
//   { name: "The Search", duration: 2.3 },
//   { name: "Old Town Road", duration: 1.3 },
//   { name: "The Box", duration: 5.23 },
// ];

// console.log(songs.filter((song) => song.duration > 3));

// const computers = [
//   { ram: 2, hdd: 50 },
//   { ram: 4, hdd: 100 },
//   { ram: 8, hdd: 200 },
//   { ram: 16, hdd: 300 },
//   { ram: 32, hdd: 400 },
// ];

// const comp = (com) => {
//   return com.ram > 2;
// };

// const computer = computers.filter(comp);
// console.log(computer);

// console.log(computers.filter((compu) => compu.ram > 16));

// const res = computers.find(computer => computer.ram === 4)
// console.log(res)

// const programmers = [
//   { name: "Jack", age: "43" },
//   { name: "Huxn", age: 19 },
//   { name: "Alex", age: 33 },
// ];

// const res = programmers.find((programmer) => programmer.name === "Alex");
// console.log(res);

// const posts = [
//   { id: 1, content: "Programming is good" },
//   { id: 2, content: "HuXn is my teacher" },
//   { id: 3, content: "I am a fullstack developer" },
// ];

// const resPost = (post) => {
//   return post.content === "HuXn is my teacher";
// };

// const res = posts.find(resPost);
// console.log(res);

// const results = posts.find(
//   (post) => post.content === "I am a fullstack developer"
// );
// console.log(results);

// const names = ["elvis", "eric", "aikins", "alfred"];
// const res1 = names.every((name) => name.length === 5);
// const res2 = names.some((name) => (name.length = 5));
// console.log(res1);
// console.log(res2);

// let products = [
//   { name: "Checkers", duration: 4.32 },
//   { name: "Harry Potter", duration: 1.23 },
//   { name: "iPhone", duration: 5.1 },
//   { name: "Learn PHP", duration: 3.2 },
// ];

// const products1 = products.every((product) => product.duration < 3);
// const products2 = products.some((product) => product.duration > 3);
// console.log(products1);
// console.log(products2);

// const ages = [18, 19, 34, 21, 26];

// const addAges = (previousAge, currentAge) => {
//   return previousAge + currentAge;
// };

// const results = ages.reduce(addAges, 0);
// console.log(results);

// const scores = [78, 90, 87, 88, 95, 100, 80];
// let res1 = scores.reduce((c, p) => {
//   return c + p;
// }, 0);

// console.log(res1);
// let highScore = scores.reduce((c, p) => (c.age > p ? c.age : p), 0);
// console.log(highScore);

// This keyword
// console.log(window);
// console.log(this);

// window.firstName = "code";
// this.lastName = "traffics";
// this.fullName = `${firstName} ${lastName}`;
// console.log(window);

// console.log(this === window);
// console.log(this !== window);

// function printThis() {
//   return this;
// }

// let res = printThis();
// console.log(res);

// const printThis = () => {
//   return this;
// };

// let res = printThis();
// console.log(res);

// USING THIS KEYWORD IN OBJ
// const obj = {
//   firstName: "code",
//   lastName: "traffics",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// let res = obj.fullName();
// console.log(res);

// Using Arrow FUnction as a Method
// const obj = {
//   firstName: "code",
//   lastName: "traffics",
//   fullName: () => {
// return `${this.firstName} ${this.lastName}`; // returns undefined
//   },
// };

// let res = obj.fullName();
// console.log(res);

// const person = {
//   fullName: "codetraffics",
//   age: 19,
//   greetRegular: function () {
//     return `Hello, my name is ${this.fullName} & I'm ${this.age} years old`;
//   },
//   greetArrow: () => {
//     return `Hello, my name is ${this.fullName} & I'm ${this.age} years old`;
//   },
// };

// console.log(person.greetArrow());
// console.log(person.greetRegular());

// Factory Functions
function createStudent(name, age, grade, hobby) {
  return {
    name,
    age,
    grade,
    hobby,
    intro: function () {
      console.log(
        `Hello, my name is ${this.name}. I am ${this.age} years old. My favorite game is ${this.hobby}`
      );
    },
  };
}

const ama = createStudent("Odeliah Gyimah", 7, 3, "dancing");
ama.intro();
const elizabeth = createStudent("Elizabeth Elikem", 9, 3, "jumping");
elizabeth.intro();
const papa = createStudent("Papa Kwame Amfo", 8, 3, "running");
papa.intro();

const createPlayer = (name, age, height, team) => {
  return {
    name,
    age,
    height,
    team,
    intro: function () {
      console.log(
        `${this.name} is a football player with a height of ${this.height}. His age is ${this.age} and he plays for ${this.team}`
      );
    },
  };
};

const jerry = createPlayer("Jerry Anderson", 15, 7.8, "Emerald Stars");
jerry.intro();

function generateVehicles(type, brand, model, year) {
  return {
    type,
    brand,
    model,
    year,
    intro: function () {
      console.log(`${this.type}, ${this.brand}, ${this.model}, ${this.year}`);
    },
  };
}

const gWagon = generateVehicles(
  "Mercedes Benz",
  "G-Class AMG G 63 Grand Edition",
  "Base model",
  2024
);
gWagon.intro();

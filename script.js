// let js = 'amazing';
// if(js === 'amazing')
// alert("JS is FUN!");
// sum = 10+20-10+20;

// console.log(sum);
// let fn = 'abscdfghhj';
// console.log(fn);
// console.log(fn);
// console.log(fn);

let js = true;
console.log(js);

console.log(typeof true);
console.log(typeof js);
console.log(typeof 30);
console.log("aaaaaaaaaa");

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(typeof year);
console.log(typeof null);

const now = 2022;
const agej = now - 2000;
console.log(agej);
console.log(agej * 2 + 10);
console.log(agej - 1820 > now - 2020);

//Test 1------------for operators

// const massmark = 78;
// const heightmark = 1.69;
// const massjhon = 92;
// const  heightjhon = 1.95;

// const BMIMark = massmark / heightmark **2;
// const BMIJhon = massjhon / (heightjhon * heightjhon);
// const markheigherBMI = BMIMark > BMIJhon;

// console.log(BMIMark, BMIJhon);
// console.log(markheigherBMI);

// console.log('string \n\
// multiple \n\
//  lines');

// if else===================

const age = 50;
const isOldEnough = age >= 18;

if (age <= 20) {
  console.log("She has driving linces");
} else {
  console.log(age + 10);
}

const by = 2010;
let a;
if (by >= 2000) {
  a = 20;
} else {
  a = 21;
}
console.log(a);

// Test 2-------------

const massmark = 95;
const heightmark = 1.88;
const massjhon = 85;
const heightjhon = 1.76;

const BMIMark = massmark / heightmark ** 2;
const BMIJhon = massjhon / (heightjhon * heightjhon);
console.log(BMIMark, BMIJhon);

if (BMIMark > BMIJhon) {
  console.log("higher then jhon");
} else {
  console.log("higher then mark");
}

const money = 100000;
if (money) {
  console.log("plz dont send money");
} else {
  console.log("you should get a well job");
}

1 + 2;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is big";
}

const me = "john";
console.log(`I am ${2037 - 1999} years old ${me} `);

//==== Functions

function sum() {
  console.log("two number of sum");
}
sum();
sum();

function sub(a, b) {
  console.log(a, b);
  const c = `Number with ${a} and ${b} value`;
  return c;
}
sub(10, 20);

// ------Array

const f1 = "abc";
const f2 = "pqr";
const f3 = "xyz";

const fns = ["abc", "pqr", "xyz"];
console.log(fns);
console.log(fns[1]);
console.log(fns.length);
console.log(fns[fns.length - 2]);

fns[1] = "ghj";
console.log(fns[1]);

const calc = function (birthyeah) {
  return 2025;
};

const years = ["2001", "2002", "20003"];
const c1 = calc(years[0]);
const c2 = calc(years[1]);

console.log(c1, c2);

const fg = ["a", "b", "c"];
fg.push = "d";
console.log(fg);
fg.unshift("E");
console.log(fg);

fg.shift();
console.log(fg);

console.log(fg.indexOf("b"));
console.log(fg.indexOf("Bob"));

console.log(fg.includes("b"));
console.log(fg.includes("Bob"));
console.log(fg.includes(23));

if (fg.includes("b")) {
  console.log("you have a call friend b");
}

const Mark = {
  fullname: "abcd",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const jhon = {
  fullname: "jkiol",
  mass: 92,
  height: 1.79,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

Mark.calcBMI();
jhon.calcBMI();
console.log(Mark.bmi, jhon.bmi);

//----looping

for (let i = 0; i <= 10; i++) {
  console.log(`left ${i}`);
}

for (let a = 0; a <= 5; a++) {
  console.log(`------${a}`);

  for (let rep = 1; rep < 10; rep++) {
    console.log(`a ${a}: ${rep}`);
  }
}

let p = 1;
while (p <= 5) {
  console.log(`you are eligible ${p}`);
  p++;
}

const calctip = function (bill) {
  return bill >= 10 && bill <= 110 ? bill * 0.12 : bill * 0.2;
};
const bills = [21, 22, 23, 24, 25];
const tips = [];
const totals = [];

for (let b = 0; b < bills.length; b++) {
  const tip = calctip(bills[b]);
  tips.push(tip);
  totals.push(tip + bills[b]);
}
console.log(bills, tips, totals);

const rex = [];
const ret = [11, 22, 33, 44, 55];
for (i = 0; i <= 5; i++) {
  console.log(`value ${ret}`);
}

const num = function (temp) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    const curtemp = temp[i];
    if (curtemp > max) if (curtemp < min) max = curtemp;
    min = curtemp;
  }
  console.log(max, min);
  return max - min;
};
num([3, 2, 7, 12]);

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.mesage').textContent =' Correct Number!';
// console.log(document.querySelector('.message').textContent);

// const number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;

// document.querySelector('.check').addEventListener('click', function ()
// {
// const guess = number1(Document.querySelector('.guess').value);
// console.log(guess, typeof guess);
// })

// orderFood(pizza, garlic){
//     console.log(f1);
//     console.log(f2);
// },
// };

//=============== Data structure Modern operators and strings
const airline = "TAP air portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));
console.log(airline.indexOf("Portugal"));
console.log(airline.slice(4));
console.log(airline.slice(8));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("you got the middle seat");
  else console.log("you got lucky");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
console.log(new String("jonas"));
console.log(typeof new String("jonas"));
console.log(typeof new String("jonas").slice(1));

// string methods
const passenger = "jOnAs";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerLower);

const email = "hello@Jonas.io";
const loginEmail = "Hello@johans.Io \n";
const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);

const priceGB = "288,97$";
const priceUS = priceGB.replace("$", "#").replace(",", ".");
console.log(priceUS);

const announcement = "All passengers come to bording door 23";
console.log(announcement.replace("door", "gate"));

const planes = "A320neo";
console.log(plane.includes("A320"));

//================padding

const message = "Go to gate 23!";
console.log(message.padStart(25, "+"));
console.log("jonas".padStart(25, "+"));
console.log(message.padStart(25, "+").padEnd(35, "+"));

const ms = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(ms(123456789));
console.log(ms("09874561236666"));

//=======Repeat
const msg = "Hello";
console.log(msg.repeat(3));

const pl = function (n) {
  console.log(`there are ${n} planes in line ${"^".repeat(n)}`);
};
pl(5);
pl(3);
pl(12);

//====== closer look at function
const flight = "LH234";
const jonas = {
  name: "jonas schmedtmann",
  passport: 2424565663,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 2424565663) {
    alert("Check in");
    console.log("check in");
  } else {
    alert("wrong passport");
    console.log("wrong passport");
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

//===== JavaScript Callbacks
function dmessage(some) {
  document.getElementById("temp").innerHTML = some;
}

function numb1() {
  dmessage("Hello Neha");
}

function numb2() {
  dmessage("Goodbye Sneha");
}

function numb3() {
  dmessage("Bye Bye Everyone");
}

numb1();
numb2();
numb3();

//===== callback 2nd example
function dismessage(some) {
  document.getElementById("temp1").innerHTML = some;
}

function num1() {
  dismessage("Hello Neha");
}

function num2() {
  dismessage("Goodbye Sneha");
}

function num3() {
  dismessage("Bye Bye Everyone");
}

num2();
num1();

//===== Sequence Control
function Displayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function Calculator(num1, num2) {
  let sub = num1 - num2;
  return sub;
}

let result = Calculator(50, 25);
Displayer(result);

//===== callback ex3

const myNumbers = [41, 11, -20, -7, 15, 19, -6];
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
document.getElementById("demo").innerHTML = posNumbers;
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}

//===== Asynchronous JavaScript

function myDisplayer(something) {
  document.getElementById("demo2").innerHTML = something;
}
function myCalculator(num1, num2, mycallback) {
  let sum = num1 + num2;
  mycallback(sum);
}
myCalculator(25, 25, myDisplayer);

//=== Timeout function

setTimeout(myfunction, 3000);

function myfunction() {
  document.getElementById("dempo").innerHTML = "I like Pune";
}
// As a value pass
setTimeout(function () {
  myFunction("I love My India !!!");
}, 3000);

function myFunction(value) {
  document.getElementById("dempo1").innerHTML = value;
}
// ==== Intervals
// setInterval(myFunction, 1000);

//  function myfunction(){
//     let a = new Date();
//     document.getElementById("dempot1").innerHTML =
//     a.getHours() + ":" +
//     a.getMinutes() + ":" +
//     a.getSeconds();
// }

// ====== Promise

function myDisplayer(some) {
  document.getElementById("dem").innerHTML = some;
}
let myPromise = new Promise(function (myResolve, myReject) {
  let x = 9;
  if (x == 9) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});
myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

// ====== JavaScript Async

function myDisplayer(some) {
  document.getElementById("dempt").innerHTML = some;
}

async function myFunction() {
  return "Hello Everyone";
}
myFunction().then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

//==== Javascript Await

async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("I love Maharastra !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

//=======Test 1=======

// const ar1 = [2, 1, 2, 3, 3, 4];
// const ar1 = [5,4,3,2,1,8,9,7,6,3]
// const ar1 = [2, 1, 2, 3, 3, 4, 5, 6, 5, 4];
const ar1 = [21, 22, 5, 4, 3, 2, 5, 8, 9, 7, 6, 3, 11, 12];

let halfLength = ar1.length / 2;
const p1 = [];
const q1 = [];

console.log('-----  Test1 Divide Array length with unique numbers-----');
for (let j = 0; j < ar1.length; j++) {
  if (p1.length < halfLength) {
   
    if (!p1.includes(ar1[j])) {
      p1.push(ar1[j]);
      console.log(ar1[j])
      continue;
    } else {
      q1.push(ar1[j]);
    }
  } else {
    q1.push(ar1[j]);    
   
  }
  
}

console.log(p1, "p1");
console.log(q1, "q1");

//======Javascript Array types=====

const person = ["john", "kamya","Tisha"];
document.getElementById("dempi").innerHTML = person[0];

const per = {firstname: 'john', lastname:'kela', age: 22 };
document.getElementById("dempi").innerHTML = per.age;
document.getElementById("dempi").innerHTML = person.length;
document.getElementById("dempi").innerHTML = person[person.length-1];

//=====Looping Array Elements
const fruits = ['apple', 'banana', 'grapes'];
let flen = fruits.length;

let txt = '<ul>';
for(let i=0; i < flen; i++){
txt += "<li>" + fruits[i] + "</li>";
}
txt += "<ul>";
document.getElementById("dempi").innerHTML = txt;

//=====Adding Array Elements

const fruit = ["Banana", "Orange", "Apple"];
document.getElementById("demo").innerHTML = fruit;

function myfunction(){
  fruit.push("Lemon");
  document.getElementById("dempi").innerHTML = fruit;
}

//===== Converting Arrays to Strings

const fr = ["Banana", "Orange", "Apple"];
document.getElementById("tem1").innerHTML = fr.toString();

//==== join() Method 
document.getElementById("tem1").innerHTML = fr.join(" * ");

// POP MEthod

const d1 = [1,3, 4, ,5];
document.getElementById("tem1").innerHTML = d1;
d1.pop();
document.getElementById("tem1").innerHTML = d1;

// JavaScript Array shift()---The shift() method removes the first array element and "shifts" all other elements to a lower index.

const de1 = [1,3,4,5];
document.getElementById("tem1").innerHTML = de1;
de1.shift();
document.getElementById("tem1").innerHTML = de1;

// JavaScript Array unshift()---- The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

const fr1 = [3,4,5,6,7];
document.getElementById("tem1").innerHTML = fr1;
fr1.unshift(2);
document.getElementById("tem1").innerHTML = fr1;

// Changing Elements
const fru1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("tem1").innerHTML = fru1;
fru1[0] = "Kiwi";
document.getElementById("tem1").innerHTML = fru1;

// concat()  : method can also take strings as arguments-- Merging an Array with Values
const myArray = ["Emil", "Tobias", "Linus"];
const myChildren = myArray.concat("Peter"); 
document.getElementById("tem1").innerHTML = myChildren;

// JavaScript Array splice()

const fr2 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("foogo").innerHTML = fr2;

fr2.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("foogo").innerHTML = fr2;

// JavaScript Array slice()--- The slice() method slices out a piece of an array into a new array.

const fre = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fre.slice(1);
document.getElementById("tem1").innerHTML = fre + "<br><br>" + citrus;

// JavaScript Sorting Arrays--- The sort() method sorts an array alphabetically:
const frr1 = [3,5,8,6,9];
document.getElementById("tem1").innerHTML = frr1;
frr1.sort();
document.getElementById("tem1").innerHTML = frr1;

// Reversing an Array-- The reverse() method reverses the elements in an array.You can use it to sort an array in descending order

const gh = [3,5,8,6,9];
document.getElementById("tem1").innerHTML = gh;
gh.sort();
document.getElementById("tem1").innerHTML = gh;
gh.reverse();
document.getElementById("tem1").innerHTML = gh;

// The Compare Function---

const points = [40, 100 , 30, 50, 120];
document.getElementById("points").innerHTML = points;

function myfunction1()
{
  points.sort();
  document.getElementById("points").innerHTML = points;
}

function myfunction1()
{
  points.sort(function(a, b){return a - b});
  document.getElementById("points").innerHTML = points;
}



//==== Lowest Number
const pot = [40, 100, 1, 5, 25, 10];
pot.sort(function(x1, y1){return x1-y1});
console.log(pot, "pot");
document.getElementById("demopp").innerHTML = pot;

// ==== Highest Number

const k1 = [40, 100, 1, 5, 25, 10];
document.getElementById("demoppt").innerHTML = myArrayMax(k1);

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

//===Example (Find Min)
const no = [40, 100, 11, 5, 25, 10];
document.getElementById("num").innerHTML = myArrayMin(no);

function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

//====JavaScript Array forEach()====

const numbers = [45, 4, 9, 16, 25];

let text1 = "";
numbers.forEach(myFunction3);
document.getElementById("num").innerHTML = text1;

function myFunction3(value) {
  text1 += value + "<br>"; 
}

//=== Map() Function====

const no1 = [45, 4, 9, 16, 25];
const no2 = no1.map(myfun2);
document.getElementById("num").innerHTML = no2;
 function myfun2(value, index, array){
  return value / 2;
 }

 //=== Filter() function=====

 const nb1 = [45, 4, 9, 16, 25];
 const over10 = nb1.filter(myFun4);
 document.getElementById("num").innerHTML = over10;
 function myFun4(value, index, array) {
   return value > 10;
 }

 // =====Reduce() Function====

 const numbe2 = [45, 4, 9, 16, 25];
 let sum2 = numbe2.reduce(myfunc);

 document.getElementById("num").innerHTML = "The sum is " + sum2;

 function myfunc(total,value,index,array){
  return total + value;
 }

 //====== JavaScript Array some()=====

const nums = [45, 4, 9, 16, 25];
let someOver18 = nums.some(myFun5);

document.getElementById("num").innerHTML = "Some over 18 is " + someOver18;

function myFun5(value, index, array) {
  return value > 18;
}
//===== Indexof()========
  const frt = ["Apple", "Orange", "Apple", "Mango"];
  let position = frt.indexOf("Apple")+1;

  document.getElementById("num").innerHTML = "Apple is found in position" + position;

  //==== JavaScript Array lastIndexOf()===

  const frti = ["Apple", "Orange", "Apple", "Mango"];
  let position3 = frti.lastIndexOf("Apple")+2;

  document.getElementById("num").innerHTML = "Apple is found in position" + position3;

//===== JavaScript Array Find()====
const num4 = [4, 9, 16, 25, 29];
let first = num4.find(myFun6);
document.getElementById("num").innerHTML = "First number over 10 is " + first;
function myFun6(value, index, array) {
  return value > 10;
}

//=====Javascript Array Keys======
const fr3 = ["Apple", "Orange", "Apple", "Mango"];
const keys = fr3.keys();
let text5 = "";
for(let x of keys)
{
  text5 += x + "<br>";
}
document.getElementById("num").innerHTML = text5;

//==== Javascript Array Entries=====
const fr4 = ["Apple", "Orange", "Apple", "Mango"];
const f = fr4.entries();
let text6 = "";
for(let x of f)
{
  text6 += x + "<br>";
}
document.getElementById("num").innerHTML = text6;

//===JavaScript Array includes()====
const fr6 = ["Apple", "Orange", "Apple", "Mango"];
document.getElementById("num").innerHTML = fr6.includes("Mango");



















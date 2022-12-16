//=======Test1 Divide Array length with unique numbers=======

// const ar1 = [2, 1, 2, 3, 3, 4];
// const ar1 = [5,4,3,2,1,8,9,7,6,3]
// const ar1 = [2, 1, 2, 3, 3, 4, 5, 6, 5, 4];
const ar1 = [21, 22, 5, 4, 3, 2, 5, 8, 9, 7, 6, 3, 11, 12];

let halfLength = ar1.length / 2;
const p1 = [];
const q1 = [];

console.log("-----  Test1 Divide Array length with unique numbers-----");
for (let j = 0; j < ar1.length; j++) {
  if (p1.length < halfLength) {
    if (!p1.includes(ar1[j])) {
      p1.push(ar1[j]);
      console.log(ar1[j]);
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

//====Test-2===concating


var str = "XZXZX";
var count = 0;
for (var i = 0; i < str.length; i++) {
  for (var j = i + 1; j < str.length - 1; j++) {
    var a = str.slice(0, i + 1); //x
    var b = str.slice(i + 1, j + 1); //z
    var c = str.slice(j + 1, str.length); //xzx
    if (a + b != b + c && b + c != c + a && a + b != c + a) {
      count++;
    }
  }
}

console.log(` Split The string that is ${str} and  count the number is :: ${count}`);










//=======Test1 Divide Array length with unique numbers=======

// const ar1 = [1, 1, 2, 3, 2, 1];
   const ar1 = [1, 3, 1, 2, 5, 2];
// const ar1 = [2, 1, 2, 3, 3, 4, 5, 6, 5, 4];
// const ar1 = [2, 1, 2, 3, 3, 4];

let halfLength = ar1.length / 2;
console.log("array length:", ar1.length);
let p1 = [];
let q1 = [];

console.log("------- Test1 Divide Array length with unique numbers-----");
for (let j = 0; j < ar1.length; j++) {
  if (p1.length < halfLength) {
    if (!p1.includes(ar1[j])) {
      p1.push(ar1[j]);
      console.log(ar1[j]);
      continue;
    }
  }
  q1.push(ar1[j]);
}
console.log(q1, "q1");
q1 = [...new Set(q1)];
console.log(q1, "new")

console.log(p1, "p1");
console.log(q1, "q1");

//==== Test 2 ===Identity Matrix

let x1 = [
  [1, 0, 0, 1],
  [1, 2, 1, 2],
  [3, 1, 2, 1],
];
let x = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
let y = [
  [1, 0, 0],
  [0, 1, 0], 
  [1, 0, 1],
];
let z = [
  [1, 0, 2],
  [0, 3, 4, 5],
  [1, 1, 1],
];
let al = [
  [2, 0, 0],
  [0, 2, 0],
  [0, 0, 2],
];
let bl = [
  [2, 0, 0, 0],
  [0, 2, 0, 0],
  [0, 0, 2, 0],
  [0, 0, 0, 2],
];

function IMatrix(matrix_num) {
  //console.log(matrix_num.length, "Return length of matrix_num");
  for (var i = 0; i < matrix_num.length; i++) {
    rows = matrix_num.length;
    cols = matrix_num[i].length;
    if (rows != cols) {
      return false;
    }
  }
  for (var i = 0; i < matrix_num.length; i++) {
    for (var j = 0; j < matrix_num.length; j++) {
      if (
        (matrix_num[i][j] === 0 && i === j) ||
        (matrix_num[i][j] && i !== j)
      ) {
        return false;
      }
    }
  }
  return true;
}

console.log(IMatrix(x1));
console.log(IMatrix(x));
console.log(IMatrix(y));
console.log(IMatrix(z));
console.log(IMatrix(al));
console.log(IMatrix(bl));

//=====Test 3 Javacript implement queue  =========

// function myQueue() {
//   this.elements = [];
// }
// console.log(myQueue.prototype, "myqueue");
// myQueue.prototype.enqueue = function (record) {
//   this.elements.push(record);
// };
// myQueue.prototype.dequeue = function () {
//   this.elements.shift();
// };
// myQueue.prototype.isEmpty = function () {
//   return this.elements.length == 0;
// };
// myQueue.prototype.peek = function () {
//   //return this.isEmpty() ? undefined : this.elements[0];
//   return this.elements[0];
// };
// myQueue.prototype.len = function () {
//   return this.elements.length;
// };
// let il = new myQueue();
// il.enqueue(1);
// il.enqueue(2);
// il.enqueue(3);
// il.enqueue(4);
// document.getElementById("demo").innerHTML = JSON.stringify(il);
// console.log(JSON.stringify(il));

// document.getElementById("demo1").innerHTML = il.peek();
// console.log("Peek that is return first value:", il.peek());
// document.getElementById("demo2").innerHTML = il.len();
// console.log("length that is return total length of the elements:", il.len());
// document.getElementById("demo3").innerHTML = il.isEmpty();
// console.log("isEmpty that is return in queue empty or not:", il.isEmpty());
// il.dequeue();
// document.getElementById("demo4").innerHTML = JSON.stringify(il);
// console.log(JSON.stringify(il), "il");
// document.getElementById("demo1").innerHTML = il.peek();
// console.log("Peek that is return first value:", il.peek());
// document.getElementById("demo2").innerHTML = il.len();
// console.log("length that is return total length of the elements:", il.len());
// il.dequeue();
// il.dequeue();
// il.dequeue();
// document.getElementById("demo4").innerHTML = JSON.stringify(il);
// console.log(JSON.stringify(il), "il");
// document.getElementById("demo3").innerHTML = il.isEmpty();
// console.log("isEmpty that is return in queue empty or not:", il.isEmpty());


//======== Queue Methods=====

let queue = [];
queue.push(11);
queue.push(12);
queue.push(13);
queue.push(14);
queue.push(15);
queue.push(14);

console.log("The queue value is:", queue);
let del = queue.shift();
console.log("Remove element is:", del)
console.log("The queue value is:", queue);
console.log(queue.length,"length");
if(queue.length > 0)
{
  console.log("Queue is not empty");
}
else{
  console.log("Queue is empty");
}
let li = queue.lastIndexOf(14);
console.log("last index value of 14 in  queue:", li);
console.log("The queue value is:", queue);

let del_l = queue.pop();
console.log("Remove last element that is contains 4th index position from the queue:", del_l)
console.log("The queue value is:", queue);

let us = queue.unshift(11);
console.log("11 is add in queue at 1st position:");
console.log("The queue value is:", queue);

let sc = queue.slice(1,4);
console.log(sc,"Slice the value");
console.log("The queue value is:", queue);

let sp = queue.splice(3, 0, 10, 20);
console.log("Add the 3rd position element",sp);
console.log("The queue value is:", queue);

sp = queue.splice(3,1);
//sp = queue.splice(3,2);  If you want to removed 3rd and 4th position value
console.log("Removed 3rd position element", sp);
console.log("The queue value is:", queue);



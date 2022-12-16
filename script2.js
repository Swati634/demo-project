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

var str = "XZXZXhjk";
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

console.log(
  ` Split The string that is ${str} and  count the number is :: ${count}`
);

//==== Test 3 ===Identity Matrix

function IMatrix(matrix_num) {
  for (var i = 0; i < matrix_num.length; i++) {
    rows = matrix_num.length;
    cols = matrix_num[i].length;
    if (rows != cols) {
      console.log("Matrix should square matrix");
      return false;
    }
  }
  for (var i = 0; i < matrix_num.length; i++) {
    for (var j = 0; j < matrix_num.length; j++) {
      if (
        (matrix_num[i][j] !== 1 && i === j) ||
        (matrix_num[i][j] && i !== j)
      ) {
        return false;
      }
    }
  }
  return true;
}
console.log(
  IMatrix([
    [1, 0, 0, 2],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  IMatrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  IMatrix([
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  IMatrix([
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 0],
  ])
);

//=====Test 4 Javacript implement queue data structure =========

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(num) {
    return this.items.push(num);
  }

  dequeue() {
    if (this.items.length > 0) {
      return this.items.shift();
    }
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }
  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log(queue.items, "Queue Numbers");

queue.dequeue();
console.log(queue.items, "Number 1st of the queue is removed");

console.log(queue.peek(), "Show last number of the queue");
queue.dequeue();
console.log(queue.items, "Again Number 1st of the queue is removed");

console.log(
  queue.isEmpty(),
  "Check queue is empty or not , here queue is not empty thats why it return false"
);

console.log(
  queue.size(),
  "Return the number of the total-size(length) from the queue"
);

queue.clear(); //
console.log(queue.items, "Queue return empty value becaus here queue is clear");
console.log(queue.isEmpty(), "Queue is empty thats why it return true");

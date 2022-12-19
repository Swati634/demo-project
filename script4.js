//=======Test1 Divide Array length with unique numbers=======

// const ar1 = [2, 1, 2, 3, 3, 4];
// const ar1 = [5,4,3,2,1,8,9,7,6,3]
// const ar1 = [2, 1, 2, 3, 3, 4, 5, 6, 5, 4];
// const ar1 = [1,1,1,1,1];

// let halfLength = ar1.length / 2;
// const p1 = [];
// const q1 = [];

// console.log("-----  Test1 Divide Array length with unique numbers-----");
// for (let j = 0; j < ar1.length; j++) {
//   if (p1.length < halfLength) {
//     if (!p1.includes(ar1[j])) {
//       p1.push(ar1[j]);
//       console.log(ar1[j]);
//       continue;
//     } else {
//       q1.push(ar1[j]);
//     }
//   } else {
//     q1.push(ar1[j]);
//   }
// }

// console.log(p1, "p1");
// console.log(q1, "q1");


{/* <script>
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
  document.write(
    ` Split The string is ${str} and the count the number is :: ${count}`
  );
  document.write("<hr>");




  // var str = "xzxzx";
// var count = 0;
// for(var i=0;i<str.length-2;i++){ */}
// for(var j=i+1;j<str.length-1;j++){
// var a = str.slice(0,i+1);
// var b = str.slice(i+1,j+1);
// var c = str.slice(j+1,str.length);
// if((a+b != b+c)&&(b+c != c+a)&&(a+b != c+a)){
// count++;
// }
// var}

// }

// console.log(count);


function countValueToSplit(s) {    
  let count = 0;
  for (let i = 1; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      // split string into 3 parts
      const first = s.slice(0, i);
      const second = s.slice(i, j);
      const third = s.slice(j, s.length);
      
      const ab = first + second;
      const bc = second + third;
      const ca = third + second;
      
      console.log('first', first);
      console.log('second', second);
      console.log('third', third);
      
      console.log(ab, 'bc', bc, 'ca', ca);
      if (ab !== bc !== ca) {
        count++;
      }
    }
  }
  console.log("COUNT", count);
  return count;
}

countValueToSplit("xzxzx");


// function countValueToSplit(s) {    
//   let count = 0;
//   for (let i = 0; i < s.length - 1; i++) {
//     for (let j = i + 1; j < s.length; j++) {
//       // split string into 3 parts
//       const x = s.slice(0, i);
//       const y = s.slice(i, j);
//       const z = s.slice(j, s.length);
      
//       const ab = x + y;
//       const bc = y + z;
//       const ca = z + y;
      
//       console.log('x', x);
//       console.log('y', y);
//       console.log('z', z);
      
//       console.log('ab', ab, 'bc', bc, 'ca', ca);
//       if (ab !== bc !== ca) {
//         count++;
//       }
//     }
//   }
//   console.log("COUNT", count);
//   return count;
// }

// countValueToSplit("xzxzx");
//=====Test 4 Javacript implement queue data structure =========

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(num) {
//     return this.items.push(num);
//   }

//   dequeue() {
//     if (this.items.length > 0) {
//       return this.items.shift();
//     }
//   }

//   peek() {
//     return this.items[this.items.length - 1];
//   }

//   isEmpty() {
//     return this.items.length == 0;
//   }
//   size() {
//     return this.items.length;
//   }

//   clear() {
//     this.items = [];
//   }
// }

// let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.enqueue(6);

// console.log(queue.items, "Queue Numbers");

// queue.dequeue();
// console.log(queue.items, "Number 1st of the queue is removed");

// console.log(queue.peek(), "Show last number of the queue");
// queue.dequeue();
// console.log(queue.items, "Again Number 1st of the queue is removed");

// console.log(
//   queue.isEmpty(),
//   "Check queue is empty or not , here queue is not empty thats why it return false"
// );

// console.log(
//   queue.size(),
//   "Return the number of the total-size(length) from the queue"
// );

// queue.clear(); //
// console.log(queue.items, "Queue return empty value becaus here queue is clear");
// console.log(queue.isEmpty(), "Queue is empty thats why it return true");

// Write a JavaScript program to check whether a given matrix is an identity matrix.
// Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n × n square matrix with ones on the main diagonal and zeros elsewhere.
// [[2, 0, 0], [0, 2, 0], [0, 0, 2]] -> true
// [[2, 0, 0], [0, 2, 0], [2, 0, 2]] -> false

// function myQueue1 () {
//   this.elements = [] ;
//   }
//   myQueue1.prototype.enqueue = function(record) {
//   this.elements.push(record) ;
//   }
//   let k = new myQueue1 ()  ;
//   k.enqueue("1 ")  ;
//   k.enqueue(" 2")  ;
//   k.enqueue(" 3 ")  ;
//   document.getElementById("demo").innerHTML = JSON.stringify(k)  ;

// function myQueue1() {
//   this.elements = [];
//   }
//   myQueue1.prototype.enqueue = function(record) {
//   this.elements.push(record);
//   }
//   myQueue1.prototype.dequeue = function() {
//   this.elements.shift();
//   }
//   myQueue1.prototype.isEmpty = function() {
//   return this.elements.length == 0 ;
//   }
//   myQueue1.prototype.peek = function() {
//   return this.isEmpty() ?  undefined : this.elements[0] ;
//   }
//   let k = new myQueue1();
//   k.enqueue("1");
//   k.enqueue("2");
//   k.enqueue("3");
//   document.getElementById("demo").innerHTML = JSON.stringify(k);
//   k.dequeue();
//   document.getElementById("demo2").innerHTML = k.peek();

//   function createQueue(){
// const queue = []
// return {
//  enqueue(item){
//   queue.unshift(item)
//  },
//  dequeue(){
// return queue.pop()
//  },
//  peek(){
//   return queue[queue.length - 1]
//  },
//  get length() {
//   return queue.length
//  },
//  isEmpty(){
//   return queue.length === 0
//  }
// }
// }

// const k2 = createQueue()
// console.log(k2.isEmpty());
// k2.enqueue('1');
// k2.enqueue('2');
// k2.enqueue('3');
// k2.enqueue('4');
// k2.enqueue('5');
// k2.dequeue();
// k2.dequeue();
// k2.peek();
// console.log(k2, "Peek");


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
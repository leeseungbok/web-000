// function
// - fundamental bulding

// 1. Function declaration
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6) 
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters
function printAll(...args) {
  for (let i =0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
      console.log(message);
      let childMessage = 'hello';
  }
}
printMessage();

sum(2,3)
// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1,2)}`);

// 7.Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
      return;
      // long upgrade
  }
}

// 1. Function expression
const print = function () {
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
    console.log('yes!');
};
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
    print();
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Ivoked Function Expression
(function hello() {
  console.log('IIFE');
})();

// Fun quiz time
// function calculate
// command:
function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}
console.log(calculate('add', 2, 3));
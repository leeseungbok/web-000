// 1.string concatenation +를 이용해 문자열을 하나로 만들어줌
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals

''''
1 + 2 = ${1 + 2}`);
console.log("ellie's \n\tbook");

// 2.Numeric operators 숫자연산에 사용
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponetiation

// 3. Increment and decrement operators 헷갈림
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1; 값을 먼저 1 더 더함
// preIncrement = counter; 변수 선언

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter; 값 먼저 선언
// counter = counter + 1; 값을1 더 더하고 변수 선언


console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${preDecrement}, counter: ${counter}`);

// 4. Assignment
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators 참 거짓 구분
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. logical operations:

const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long
if (nullableObject != null) {
    nullableObject.something;
}

function check() {
  for (let i = 0; i < 10; i++) {
      console.log('su');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality 2개의 값이 동등한지 다른지 구분한다
const stringFive = '5';
const numberFive = '5';

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// == strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if else를 써서 name 값에 따라 값을 출력한다

const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}

// 9. Ternary operator: ? 값이 true이면 왼쪽거를 틀리면 오른쪽 것을 실행한다
// condition ? value1: value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement 안에 있는 browser 값이 똑같으면

const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops 반복문
// while loop, while the condition is truthy
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is excuted first,
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
// for loop
// i의 값이 0이 될 때까지 값을 빼서 실행하라
for (let i = 3; i > 0; i = i - 2) {
    console.log(`inline variable for: ${i}`);
}

for (let i = 3; i < 10; i++) {
    for (let i = 3; i < 10; i++) {
      console.log(`inline variable for: ${i}`);
    }
}

// nested loops
// q1.
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
      console.log(`q1. ${i}`);
    }
}

// q2.
for (let i = 0; i < 11; i++) {
    if (i > 8) {
      break;
    }
    console.log(`q2. ${i}`);
}
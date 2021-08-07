// object
// 1. Literals and properties
const obj1 = {};
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// with Javascript magic (dynamically typed language)
// can add properties later
ellie .hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2.Computed properties
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj.key);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3.Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
function makePerson(name, age) {
  return {
    name: name,
    age: age,
  };
}

console.log(person4);
// 4. Constuctor function
function Person(name, age) {
  return {
  name = name,
  age = age,
  // return this;
  };
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for.. in vs for..of
console.clear();
for (key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array){
   console.log(value);
}

// 7. Fun cloning
// Object.assign(dest,[ obj1, obj2, obj3 ...)]
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

/// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}

console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user)
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
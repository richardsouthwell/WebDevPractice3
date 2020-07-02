// var, let, const
// dont use var, it is global

let age = 30;
// let can change
age = 31;

// declaring with const gives error if it changes (but is more robust)

const plusThree = (x) => x+3;

console.log(age);

//String, Numbers, Boolean, null, undefined

const name = `John`;
const newAge = 36;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
const hello = 'My name is ' + name + ' and I am ' + age;
console.log(hello);

console.log(hello.length);
// length is just a `property', so no brackets, but toUpperCase(), is a method

console.log(hello.toUpperCase());

// method toUpperCase() is a function associated with the object

console.log(hello.substring(0,5).toUpperCase());
// first gets substring, then makes it upper case

console.log('bob'.split(''));

console.log('here, is, my ,list'.split(', '));

// ["here", "is", "my ,list"][1]

/* multi
line 
comment
*/

const myNumbersAndLetters = new Array(1,2,3,'f');
console.log(myNumbersAndLetters);

const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('berrys');
console.log(fruits);

console.log(Array.isArray(fruits));

console.log([2,1,2,1].indexOf(1));

// object literals (just key value pairs ?!)

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'sports'],
    address: {
        street: 'love street',
        town: 'love town'
    }
}

console.log(person.address, 7);

// person.hobbies[1]

// add properties
person.email = 'jhgb@jg.com'

//pull stuff out
const {firstName, lastName, address: { town}} = person
console.log(firstName, town, person.email);

const todos = [
    {
        id: 1,
        text: 'Take the dog',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Take the cat',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Take the mat',
        isCompleted: false
    }
];

console.log(todos[1].text);


//if (hour < 18) {
 //   greeting = "Good day";
 // } else {
 //   greeting = "Good evening";
//  }

 for(let i = 0; i < 10; i++){
// for(let i = 0; i < 10; i = i + 1){
    console.log(2*i);
 }


  function isZero (x) {
      if ( x == 0){
          return true
      } else {
          return false
      }
  }

const timesFive = (x) => {if ( x == 0){
    return 0
} else {
    return 5 + timesFive (x - 1)
}
}


const adder = (x,y) => x + y;

//const makesPlusy = (y) => ((x) => x + y)

// when do you use ;

// making functions







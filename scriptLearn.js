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

// while
let i = 0;
while(i < 10) {
    console.log(`While no:  ${i}`);
    i++;
}


//for (let todo of todos) {
//    console.log(todo.text)
//}

const myFun = function(todo) {
    console.log(todo.text)
}
// applies function in a loop
todos.forEach(myFun);

const toText = todos.map((todo) => todo.text)
console.log(toText)

const isDone = todos.filter((todo) => (todo.isCompleted == true)).map((todo) => todo.text)
console.log(isDone)

const xx = '9';
if(xx == 10){
    console.log('x iss 10');
}
if(xx === 10){
    console.log('x is identical 10');
} else if (xx == 10) {
    console.log('looks like 10');
} else 
console.log('does not match');

// 2 > 1 && 3 == 3
// 2 < 1 || 3 == 3

// ternary operator (shorthand if statement)

const xxx = 5;
const color = xxx > 10 ? 'red' : 'blue';

console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
        default:
            console.log('color is something else');
            break;
}

function addNums(num1, num2) {
    return(num1 + num2)
}

function addNums2(num1 = 1, num2 = 1) {
    console.log(num1 + num2)
}

addNums2()

function addNums3(num1 = 7, num2 = 4) {
    return(num1 + num2)
}

console.log(addNums3());


const addNums4 = (num1 = 7, num2 = 4) => {
    return(num1 + num2)
};

const addNums5 = (num1 = 7, num2 = 4) => (num1 + num2);

///////////////// 

// constructure functions with prototypes
// esx classess ? 

// constructor function uses capital
function Person(firstName, lastName, dob){
    this.firstName1 = firstName;
    this.lastName1 = lastName;
    this.dob1 = new Date(dob);

    this.getBirthYear = function() {
        return this.dob1.getFullYear();
    }
}

const person1 = new Person('John', 'Doe','3-8-1984');

console.log(person1);

console.log(person1.getBirthYear());


Person.prototype.birthSentence = function() {
    return this.firstName1 + ' was born at ' + this.dob1;
}

console.log(person1.birthSentence());

// es 6 (classess)

class PersonB {
    constructor(firstName,lastName,dob) {
        this.firstName1 = firstName;
        this.lastName1 = lastName;
        this.dob1 = new Date(dob);    
    }

    // methods

    birthSentence() {
        return this.firstName1 + ' was born at ' + this.dob1
    }
}

const person1B = new Person('JohnB', 'Doe','3-8-1984');
console.log(person1B.birthSentence());


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

///////////// questions

//const makesPlusy = (y) => ((x) => x + y)

// when do you use ;

// making functions

// sets

// plotting

// input textboxes from html, then outputs

// ' vs ` vs "

// why isnt the learning javascript.html active on website ?

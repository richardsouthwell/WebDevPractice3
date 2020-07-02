//in the browser we have the window object (parent object of browser)
console.log(window);
// window has altert method

const sq = (x) => x*x;

window.alert(sq(4));
//since window is the top level, we dont have to do window. above

// window.LocalStorage (inspect the console output)

// window.fetch (for API's )

// window.fetch (api request)


// document oriented model

// single element selectors


someform = document.getElementById('my-form')
console.log(someform);
//because my-form is the id of something in the html

console.log(document.querySelector('.container'));

console.log(document.querySelector('h1'));

// its a single element selector, so if there are multiple h1's in the html, it will just select the first



// multiple element selectors
//get all of unordered list from  <ul class="items">

const items = document.querySelectorAll('.item')

console.log(items);
// gives us a node list (similar to an array)

console.log(document.getElementsByClassName('item'));
// not as good, gives us a html collection 

console.log(document.getElementsByTagName('li'));
// not as good

// looping over selections
items.forEach((item) => console.log(item))

// how to change DOM (how to change web document)

// grab ul of class of items
//       <ul class="items">

// select single element

const myul = document.querySelector('.items'); 
// grabbing ul with class of items

//myul.remove();
// removes the unordered list

//make code that removes something in response to something

// remove last one of list
myul.lastElementChild.remove();

// make first element say hello 
myul.firstElementChild.textContent = 'Hello';

// run some rewrite systems

// change second one
//myul.children[1].innerText = 'Brad'
myul.children[1].innerHTML = '<h1>Hello</h1>';

// change color of button
const mybtn = document.querySelector('.btn');
mybtn.style.background = 'red';

// add event lister (event, function)
// e is an event parameter


mybtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked')
    console.log(e);
  //  console.log(e.target);
  // e stores where mouse was and loads of information, like where the mouse was etc.
  document.querySelector('#my-form').style.background = 'purple';
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Buttom clicked</h1>';
});


//mybtn.addEventListener('mouseout', (e) => {
// also "input events"
mybtn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    console.log('clicked')
    console.log(e);
  //  console.log(e.target);
  // e stores where mouse was and loads of information, like where the mouse was etc.
  document.querySelector('#my-form').style.background = 'blue';
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Buttom hovered over</h1>';
});

// make cellular automata, rewrite systems, graphs etc.

// how to use code libraries
// graph visualization
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
// the latter refers to the empty list of users
//  <ul id="users"></ul>
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value)
}
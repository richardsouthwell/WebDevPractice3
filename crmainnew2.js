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
 //   console.log(nameInput.value)

 if (nameInput.value === '' || emailInput.value === '') {
     alert('Please enter fields');
     // grabs new style (from css ?)
     msg.classList.add('error');
     msg.innerHTML = 'Please enter fields';
     // set timeout, with removal function and time in milliseconds
     setTimeout(() => msg.remove(), 3000);
 } else {
    // console.log('sucsess');
    // if it works, we want to add data into ul (unordered list)
    // create list item
    const myli = document.createElement('li')

    // add information inside of new element
    myli.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(myli);
    // Clear fields 

    nameInput.value = '';
    emailInput.value = '';
 }
}

// nodejs or fetch api, to store data
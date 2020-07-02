const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
// the latter refers to the empty list of users
//  <ul id="users"></ul>
myForm.addEventListener('submit', onSubmit);

//const myFun = (x) => 2 * x 

const divQ = (x,y) => {
    if (x % y == 0){
        return true
    } else {
        return false
    }
}

passingPrimeTestQ = (x,n) => {
    if (n < 2){
        return true
    } else if (divQ(x,n)) {
        return false
    } else {
        return passingPrimeTestQ(x,n-1)
    }
}

const myFun = (x) => {
    if (x < 2){
        return false
    } else {
        return passingPrimeTestQ(x,x-1)
    }
}

function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value)
    document.querySelector('.items').lastElementChild.textContent = myFun (nameInput.value);
}
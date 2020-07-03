const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
// looks at the html with id = name, which happens to be in the container part
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
// the latter refers to the empty list of users
//  <ul id="users"></ul>
myForm.addEventListener('submit', onSubmit);
// on submission to form, run onSubmit(e) on the event e described later
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
        return 'That is a prime number'
    } else if (divQ(x,n)) {
        return 'That is not a prime number'
    } else {
        return passingPrimeTestQ(x,n-1)
    }
}

const isPrime = (x) => {
    if (x < 2){
        return 'That is not a prime number'
    } else {
        return passingPrimeTestQ(x,x-1)
    }
}

const myFunRun = (x) => {
    if (x >0 && (x % 1 == 0)){
        return isPrime(x)
    } else {
        return 'Input must be a positive whole number'
    }
}


const myFun = (x) => {
    if (typeof(x) == "number"){
        return myFunRun(x)
    } else {
        return 'Input must be a number'
    }
}


function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value)
    console.log(typeof(nameInput.value))
    // outputs result to the last item's text
    document.querySelector('.items').lastElementChild.textContent = myFun(Number(nameInput.value));
}
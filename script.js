console.log("my first javascript !!!!! :-)")
function plusOne (x) {
    return x+1
}
const plusTwo = (x) => x+2

function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
    var currentVal = document.getElementById("countDownButton").innerHTML;
    var newVal = 0;
    if (currentVal > 0) {
        newVal = currentVal - 1;
    }
    document.getElementById("countDownButton").innerHTML = newVal;
}
// let count = localStorage.getItem("count")
// if (count == null) {
//     count = 0;
// }
// function updateCount() {
//     document.querySelector("span").textContent = count;
//     localStorage.setItem("count", count)
// }

// document.querySelector("#decreaseButton").addEventListener("click", function () {
//     count--
//     updateCount();
// })
// document.querySelector("#increaseButton").addEventListener("click", function () {
//     count++
//     updateCount();
// })
// updateCount();




const decreaseButton = document.querySelector("#decreaseButton");
const increaseButton = document.querySelector("#increaseButton");
const span = document.querySelector("span");
let counter;
if (!localStorage.getItem("span")) {
    counter = 0
} else (
    counter = localStorage.getItem("span")
)

span.innerHTML = counter;
function decrease() {
    if (span.innerHTML > 0) {
        span.innerHTML = counter--;
    } else {
        decreaseButton.disabled = true;
    }
}
function increase (){
    decreaseButton.disabled = false;
    span.innerHTML = counter ++
        localStorage.setItem("span" , span.innerHTML)
}
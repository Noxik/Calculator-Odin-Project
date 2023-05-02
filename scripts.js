const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a/b;

let second;
let operator;

const operate = (a, b, math) => math(a,b);
let first = ""/* variable display */
let digit /* 0-9 calc */

let result = document.querySelector(".result")

/* button click to result div */
const btn = document.querySelectorAll("button");
btn.forEach( function(e) {
    e.addEventListener("click", () => {
        digit = e.textContent;
        first += digit.toString() /* add to take more than 1 digit from calc */
        result.innerText = first;
   })})

   
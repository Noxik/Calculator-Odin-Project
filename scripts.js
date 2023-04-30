const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a/b;

let first;
let second;
let operator;

const operate = (a, b, math) => math(a,b);
let show /* variable display */

let result = document.querySelector(".result")

/* button click to result div */
const btn = document.querySelectorAll("button");
btn.forEach( function(e) {
    e.addEventListener("click", () => {
        show = e.textContent;
        result.innerText = show;
   })})
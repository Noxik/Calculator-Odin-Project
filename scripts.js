const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a/b;
const exponentiation = (a,b) => Math.pow(a, b);

let math
let a = 2;
let b = 4;

const operate = (a, b, math) => math(a,b);

let show = ""/* variable display */
let digit /* 0-9 calc */

let result = document.querySelector(".result")


/* button click to result div */
const digitBtn = document.querySelectorAll(".digit");
digitBtn.forEach( function(e) {
    e.addEventListener("click", () => {
        digit = e.textContent;
        show += digit.toString() /* add to take more than 1 digit from calc */
        result.innerText = show;
   })})

/* button click choose operator => math var */
const operatorBtn = document.querySelectorAll(".operator");
operatorBtn.forEach( function(e) {
          e.addEventListener("click", () => {
            switch(e.textContent) {
                case ("x"):
                    math = multiply;
                    break;
                case ("+"):
                    math = add;
                    break; 
                case ("-"):
                    math = subtract;
                    break; 
                case ("\u00F7"): /* IMPORTANT: this is division symbol for JS code! */
                    math = divide;
                    break; 
                case ("xy"):
                    math = exponentiation;
                    break; 
                }
            console.log(e.textContent);
            console.log(math)
         })})
   

let cleanBtn = document.querySelector(".clean")
cleanBtn.addEventListener("click", () => {
    result.innerText = "0";
    show = ""
})

let countBtn = document.querySelector(".count")
countBtn.addEventListener("click", () => {
    let test = operate(a,b, math)
    result.innerText = test
    show = ""
})
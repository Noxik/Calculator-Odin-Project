const add = (a,b) => Number(a) + Number(b);
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a/b;
const exponentiation = (a,b) => Math.pow(a, b);

const operate = (a, b, math) => math(a,b);

let math
let a = "";
let b = "";
let show = ""; /* variable display */

/* to test a and b */
let divA = document.getElementById("a")
let divB = document.getElementById("b")
let divX = document.getElementById("x")

let result = document.querySelector(".result")

/* button click to result div */
const digitBtn = document.querySelectorAll(".digit");
digitBtn.forEach( function(e) {
    e.addEventListener("click", () => {
        let digit = e.textContent;
        show += digit.toString() /* add to take more than 1 digit from calc */
        result.innerText = show;
        if (math !== undefined) {
            b = show;
            console.log(b)
            divB.textContent = b
        } else {
        a = show
        divA.textContent = a
        console.log(a)}
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
            let x = e.textContent;
            divX.textContent = " " + x + " "
           // a = show
           // divA.textContent = a
            show = ""
            console.log(a)
         })})
   

let cleanBtn = document.querySelector(".clean")
cleanBtn.addEventListener("click", () => {
    result.innerText = "0";
    show = "";
    a = "";
    divA.textContent = a
    b = ""
    divB.textContent = b
    divX.textContent = ""
    math = undefined
})

let countBtn = document.querySelector(".count")
countBtn.addEventListener("click", () => {
    let test = operate(a,b, math)
    result.innerText = test
    a = test;
    divA.textContent = a
    divB.textContent = b + " ="
    show = ""
})
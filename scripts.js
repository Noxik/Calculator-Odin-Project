const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const exponentiation = (a,b) => Math.pow(a, b);
const percent = (a,b) => a * b/100
const divide = function (a,b) {
    if (b === 0) {
        alert("what da fak u wanna do?!");
        result.textContent = "choose different number"
        b = ""
    } else {
        return a/b;
             }
    } 

const operate = (a, b, math) => math(a,b);

let math
let a = "";
let b = "";
let display = ""; /* variable display */
let digits = []

/* to test a and b */
let divA = document.getElementById("a")
let divB = document.getElementById("b")
let divX = document.getElementById("x")

let result = document.querySelector(".result")
let dotBtn = document.getElementById("dot")



   
/* button click to result div */
const digitBtn = document.querySelectorAll(".digit");
digitBtn.forEach( function(e) {
    e.addEventListener("click", () => {   

/* dot button options */
    if (e.textContent === ".") {
        if (digits.some((x) => x === ".") || digits.some((x) => x === "0.")) {
            dotBtn.disabled = true
            
        } else {
        
        if (digits.length === 0) {
            digits.push("0.")
            display = "0."
            result.textContent = display;
            
        } else {
            digits.push(".")
            display += "."
            result.textContent = display
                }
            }
    // end dot button options

    } else {
    
        digits.push(e.textContent)  
        display = Number(digits.join(""))
        result.textContent = display

/* this is "switch" which decide if display number go to var a or var b */
    if (math === undefined) {
        a = display
        // divA.textContent = a
        // if we place "divA.textContent = a" we will see var a above calc display before we click operator button
    } else {
        
        b = display; 
        test = operate(a,b, math) // we can create result of math operation before we press = or any operator button second time 
        divB.textContent = b
    }
   
//    console.log("a:", a, "b:", b, "test", test)
}
})
   })

/* button click choose operator and save sa var math */
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
                case ("\u00F7"): // IMPORTANT: this is division symbol for JS code! 
                    math = divide;
                    break; 
                case ("xy"):
                    math = exponentiation;
                    break; 
                case ("%"):
                        math = percent;
                        break; 
                }           
            divA.textContent = a
            digits = [];
            dotBtn.disabled = false
    /* if we have number in var a and b and next press operation button again we clear b button to continue math operations and we continue to display first result which is equal to a (to make next operation) */
            if (test !== undefined) {    
                a = test;
                divA.textContent = a
                b = ""
                divB.textContent = ""
                result.textContent = a
            }          

            if (e.textContent === "xy")
                {divX.textContent = "^";} 
            else {
            let x = e.textContent;
            divX.textContent = x}  

            /* its important to set b to 1 because of math operation problem if b = "" it cause that JS take "" as 0 so display change from a=test to 0 (multiply) or 1 (exponentiation) or Infinitive (divide) */
                if (math === multiply || math === divide || math === exponentiation) {
                    b = 1
                }
                test = operate(a,b, math);

            // console.log("aa:", a, "bb:", b)
        })})


let test 


let cleanBtn = document.querySelector(".clean")
cleanBtn.addEventListener("click", () => {
    clean()
})

let plusMinusBtn = document.querySelector(".plusminus")
plusMinusBtn.addEventListener("click", () => { 
   if (a !== undefined && b === "") { 
    a *= -1
   divA.textContent = a}
  
   if (b !== "") {
    b *= -1
   divB.textContent = b
   }
//    console.log("a:", a, "b:", b, "test:", test, "display:", display)
   
    result.textContent = a
    test = operate(a,b, math)
})


let deleteBtn= document.querySelector(".del")
deleteBtn.addEventListener("click", () => { 
 del()
})

let countA
let countBtn = document.querySelector(".count")
countBtn.addEventListener("click", () => {
count()
})


// BETA KEYDOWN 
window.addEventListener("keydown", event => {   
//     console.log(event.key)
     let liczby = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."]
   
    if (liczby.some((x) => x == event.key)) {
         (digits.join()).split(",")
         digits.push(event.key)  
         display = Number(digits.join(""))
         result.textContent = display
            
    if (math === undefined) {
        a = display;
    //    console.log("a", a, "b", b)
        } else {
            b = display;
            divB.textContent = b
        //    console.log("aa", a, "bb", b);
            test = Number(operate(a,b, math))
                 }
    } 
 
    switch(event.key) {
         case ("*"):
             math = multiply;
             c = "x";
             digits = []
             break;
         case ("+"):
             math = add;
             c = "+";
             digits = []
             break; 
         case ("-"):
             math = subtract;
             c = "-";
             digits = []
             break; 
         case ("/"): // IMPORTANT: this is division symbol for JS code! 
             math = divide;
             c = "\u00F7";
             digits = []
             break; 
         case ("^"):
             math = exponentiation;
             c = "^";
             digits = []
             break; 
         case ("%"):
             math = percent;
             c = "%";
             digits = []
             break;               
         }      
         
        if (a !== undefined && math !== undefined) {            
        //     console.log("aaa", a, "bbb", b);
             result.textContent = display;
             divA.textContent = a;
             divX.textContent = c;
             divB.textContent = b             
         }
             
        if (test !== undefined && digits.length === 0) {    
            a = test;
            divA.textContent = a
            b = ""
            divB.textContent = ""
            result.textContent = a
        }          
 
        if (event.key === "Enter" || event.key === "=") {
            count()
           
        }

        if (event.key === "Backspace") {
            del();
        //    console.log("a", a, "b", b, "math", math, "test", test)
        
        // additional because something dont work with Backspace keydown. without it after delete var b something is blocked on var math and cant go to the next variable (a)
            if (a !== undefined && b === 0 && math !== undefined) {
                math = undefined;
                divX.textContent = " "
            }
        }
        
        if (event.key === "Escape" || event.key === "c") {
           clean()
        }
    
    })

    function clean() {
        a = "";
        b = "";
        math = undefined;
        digits = [];
        display = ""
        test = undefined;
        result.textContent = 0;
        countA = "";
        divA.textContent = ""
        divB.textContent = ""
        divX.textContent = ""
        dotBtn.disabled = false 
    }

    function del() {
        if (a !== undefined && math !== undefined && b === 0) {
            math = undefined;
            divX.textContent = " ";
            result.textContent =  a;
            // console.log("aaa po math")
              } 
             
              else if (a !== undefined && math !== undefined && b !== undefined) {
                digits.pop();
                display = digits.join("");
            //   console.log("display", display)
                b = Number(digits.join(""))
                divB.textContent = b
            
                result.textContent = digits.join("") 
                test = operate(a,b, math)
                if ((digits.join("")).length === 0) {
                    b = 0;
                    result.textContent = "0";
                    divB.textContent = " "
                }
            }
              
              else {
            //   console.log("wchodzi ostatni")
                digits = Array.from(String(a), String); //if there is array.from(String(a), String) then when you have "." in your a number it cause error NaN
                digits.pop();
                a = Number(digits.join(""))
                divA.textContent = a
                result.textContent = a
                test = undefined
              }
    }

    function count() {
        countA = Number(operate(a,b, math)) 
        a = countA
        test = a
        result.textContent = countA
        divB.textContent = b + " ="
        divA.textContent = countA
    digits = []
    display = ""
    //    console.log(a, test, b)
    }
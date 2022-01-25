let display1E1 = document.querySelector('.display1')
let display2E1 = document.querySelector('#show2')
let tempResultE1 = document.querySelector('.temp-result')
let getnumber = document.querySelectorAll('.button')
let operator = document.querySelector('#plus')
let equalE1 = document.querySelector('.equal')
let clearAllE1 = document.querySelector('#del')
let clearLastE1 = document.querySelector('.last-entity-clear')

let firstNumber;
let secondNumber;
let firstNum;


function getnum(check){
   display2E1.innerHTML+=check  
     
}


function operators(opt){
    firstNumber =display2E1.innerHTML
    display1E1.innerHTML=firstNumber + opt
    display2E1.innerHTML=('')
    operator=opt
}
function del(params) {
    display1E1.innerHTML=('')
    display2E1.innerHTML=('')
}
function getnum2() {
    firstNum = firstNumber;
    secondNumber = Number(display2E1.innerHTML)
}

function answer(){
    getnum2();
    if(operator =='+'){
        display1E1.innerHTML += display2E1.innerHTML
        document.querySelector('#show2').innerHTML= Number(firstNumber) + Number(secondNumber);  
     }
     else if (operator =='-'){
        document.querySelector('#show2').innerHTML= Number(firstNumber) - Number(secondNumber);
     }
     else if (operator =='*'){
        document.querySelector('#show2').innerHTML= Number(firstNumber) * Number(secondNumber);
     }
     else if (operator =='/'){
        document.querySelector('#show2').innerHTML= Number(firstNumber) / Number(secondNumber);
     }
     else if (operator =='%'){
        document.querySelector('#show2').innerHTML= Number(firstNumber) % Number(secondNumber);
     }




}




    


// Declaring buttons/ display
const upperDisplay = document.querySelector('.digitsUpper');
const lowerDisplay = document.querySelector('.digitsLower');
const numberBttn = document.querySelectorAll('.number');
const decimal = document.querySelector('#decimal');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const operatorBttn = document.querySelectorAll('.symbol-operator')
const equalsBttn = document.querySelector('#equals');





//Global vars
let num1 = '';
let num2 = '';
let operator = '';
//Display
numberBttn.forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    checkNum(e.target.textContent);
  })
})

//Checking input number length
function checkNum(number){
  console.log('checkNum', num1, operator, num2, '-->',number);
  if (num1.length <= 21){
    num1 += number;
    lowerDisplay.textContent = num1;
  }
  //checking if = 
  if (operator === '='){
    num2 = '';
  }
}


// Ind. calculating func
function add(num1,num2){
    return num1 + num2
}
function subtract(num1,num2){
    return num1 - num2
}
function multiply(num1,num2){
    return num1 * num2
}
function divide(num1,num2){
    return num1 / num2
}
function percent(num1,num2){
    return (num2 / 100) * num1
}

//Operate function that calls the given calculate function
function operate() {
    num1 = Number(num1)
    num2 = Number(num2)
  
    switch (operator) {
      case '+':
        num2 = add(num1, num2)
        break
      case '-':
        num2 = subtract(num1, num2)
        break
      case 'x':
        num2 = multiply(num1, num2)
        break
      case '%':
        num2 = percent(num1, num2)
        break
      case '÷':
        num2 = num2.toString();
        if (num1 == 0) {
          num2 = "Dont divide by 0..."
        } else {
          num2 = divide(num1, num2);
        }
        break
    }
    num2 = roundNum(num2)
    prevDisplay.textContent = "";
    currentDisplay.textContent = num2;
    num1 = '';
  }
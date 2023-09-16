//Global vars
let num1 = '';
let num2 = '';
let operator = '';






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
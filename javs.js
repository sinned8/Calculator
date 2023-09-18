//Dennis Dust -- Calculator 

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

//Lower display
numberBttn.forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    checkNum(e.target.textContent);
  })
})
//Checking input number length & updating lower display
function checkNum(number){
  // console.log('checkNum', num1, operator, num2, '-->',number);
  if (num1.length <= 21){
    num1 += number;
    lowerDisplay.textContent = num1;
  }
  //checking if operator is = to clear
  if (operator === '='){
    num2 = '';
  }
}

//Updating #'s of  lower into uppper display when 
// operator bttn is clicked
operatorBttn.forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    checkOperator(e.target.textContent);
  })
})
function checkOperator(op){
  if (num1 == '' && num2 == ''){
    num1 = '0';
  } 
  else if (operator == '' && num2 !== ''){
    num2 = ''
  }  
  else if (num2 === "") {
    num2 = num1;
    handleOperator(op);
  } else if (num1 === "") {
    handleOperator(op);
  } else {
    operate();
    operator = op;
    lowerDisplay.textContent = " ";
    upperDisplay.textContent = num2 + " " + operator;
  }
}
function handleOperator(text){
  operator = text;
  upperDisplay.textContent = num2 + ' ' + operator;
  lowerDisplay.textContent = '';
  num1 = '';
}


//Equals bttn
function calculate(){
  if(num1 != '' && num2 != ''){
    operate();
  }
}
equalsBttn.addEventListener('click', calculate);
//Clear bttn
function clearBttn(){
  lowerDisplay.textContent = '';
  upperDisplay.textContent = '';
  num1 = '';
  num2 = '';
  operator = '';
}
clear.addEventListener('click',clearBttn);
//Delete bttn
function delbttn(){
  num1 = num1.slice(0, lowerDisplay.textContent.length -1);
  lowerDisplay.textContent = lowerDisplay.textContent.slice(0, lowerDisplay.textContent.length - 1);

}
del.addEventListener('click', delbttn);
//Decimal bttn
function decimalBttn(){
  if(num1.includes('.') == false){
    lowerDisplay.textContent = lowerDisplay.textContent + '.';
    num1 = num1 + '.'
  }
}
decimal.addEventListener('click',decimalBttn);


// Ind. calculating func
function add(num1,num2){
    return num1 + num2
}
function subtract(num1,num2){
    return num2 - num1
}
function multiply(num1,num2){
    return num1 * num2
}
function divide(num1,num2){
    return num2 / num1
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
      case '/':
        num2 = num2.toString();
        if (num1 == 0) {
          num2 = "Dont divide by 0..."
        } else {
          num2 = divide(num1, num2);
        }
        break
    }
    num2 = roundNum(num2)
    upperDisplay.textContent = "";
    lowerDisplay.textContent = num2;
    num1 = '';
  }

  //Rounding num 
  function roundNum(num){
    return Math.round(num * 1000000) / 1000000;
  }
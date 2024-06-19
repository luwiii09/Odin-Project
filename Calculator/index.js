const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.buttonOperator');
const buttonEqual = document.querySelector('.buttonEqual');
const buttonClear = document.querySelector('.buttonClear');

let isResult = false;

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

function operate(arrayNum) {
  const a = arrayNum[0];
  const operator = arrayNum[1];
  const b = arrayNum[2];

  if (operator === '+') {
    return add(a, b);
  } else if (operator === '-') {
    return subtract(a, b);
  } else if (operator === 'x') {
    return multiply(a, b);
  } else if (operator === '/') {
    return divide(a, b);
  } else {
    return null;
  }
}

function updateDisplay(value) {
  if (display.textContent === '0' || isResult) {
    display.textContent = value;
    isResult = false;
  } else {
    display.textContent += value;
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    updateDisplay(button.innerText);
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    updateDisplay(operator.innerText);
  });
});

function splitString(text) {
  const operatorRegex = /([+\-x/=%])/;
  const splitString = text.split(operatorRegex);

  return splitString;
}

buttonEqual.addEventListener('click', () => {
  const ope = splitString(display.textContent);
  const result = operate(ope);
  display.textContent = result;
  isResult = true;
});

buttonClear.addEventListener('click', () => {
  display.textContent = '0';
});

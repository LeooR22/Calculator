let firstOperand = ""
let secondOperand = ""
let currentOperation = null
let shouldResetScreen = false


const numberButtons = document.querySelectorAll("[data-number]")
const operatorButtons = document.querySelectorAll("[data-operator]")
const equalButton = document.getElementById("equal")
const clearButton = document.getElementById("clear")
const deleteButton = document.getElementById("delete")
const pointButton  = document.getElementById("point")
const currentOperationScreen =document.getElementById("currentOperationScreen")
const lastOperationScreen = document.getElementById("lastOperationScreen")


equalButton.addEventListener("click", evaluate)
clearButton.addEventListener("click", clear)
deleteButton.addEventListener("click", deleteNumber)
pointButton.addEventListener("click", appendPoint)


numberButtons.forEach((button) =>
      button.addEventListener("click", () => appendNumber(button.textContent))
      )

operatorButtons.forEach((button) =>
      button.addEventListener("click", () => setOperation(button.textContent)))


function appendNumber(number) {
      if (currentOperationScreen.textContent === "0" || shouldResetScreen)
            resetScreen()
        currentOperationScreen.textContent += number
}

function resetScreen() {
      currentOperationScreen.textContent = ""
      shouldResetScreen = false
}

function clear() {
      currentOperationScreen.textContent = "0"
      lastOperationScreen.textContent = ""
      firstOperand = ""
      secondOperand = ""
      currentOperation = null
}

function appendPoint() {
      if (shouldResetScreen) resetScreen()
      if (currentOperationScreen.textContent === "")
            currentOperationScreen.textContent="0"
      if (currentOperationScreen.textContent.includes(".")) return
      currentOperationScreen.textContent += "."
}

function deleteNumber() {
      currentOperationScreen.textContent = currentOperationScreen.textContent
      .toString()
      .slice(0, -1)
}

function setOperation(operator) {
      if (currentOperation !== null) evaluate()
      firstOperand = currentOperationScreen.textContent
      currentOperation = operator
      lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`
      shouldResetScreen = true
}

function evaluate() {
      if (currentOperation === null || shouldResetScreen) return
      if (currentOperation === "÷" && currentOperationScreen.textContent === "0") {
            alert("You can't divide by 0")
      }
      secondOperand = currentOperationScreen.textContent
      currentOperationScreen.textContent = roundResult(
            operate(currentOperation, firstOperand, secondOperand)
      )
      lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
            currentOperation = null
}

function roundResult(number) {
      return Math.round(number * 1000) / 1000
}


const add = function(a,b) {
    return a+b   
  };
  
  const subtract = function(a,b) {
    return a-b
  };
  
  const multiply = function(a,b) {
    return a * b
  };
  
const divide = function(a,b){
    return a/b
}

  const operate = function(operator, a, b){
      a = Number (a)
      b = Number (b)
      switch (operator){
        case "+":
              return add(a,b)
        case "-":
              return subtract(a,b)
        case "X":
              return multiply(a,b)
        case "÷":
              return divide(a,b)
        default:
            return null
      }
  }
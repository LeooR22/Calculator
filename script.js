const add = function(a,b) {
    return a+b   
  };
  
  const subtract = function(a,b) {
    return a-b
  };
  
  const multiply = function(array) {
    return a*b
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
        case "−":
              return subtract(a,b)
        case "×":
              return multiply(a,b)
        case "÷":
              return divide(a,b)
        default:
            return null
      }
  }
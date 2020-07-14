function calculate(paramArray) {
  // Try looping through the array and setting array values to variables based on type
  let validOperators = ['+', '-', '*', '/']
  let operator = ''
  let numbers = []

  for (let i = 0; i < paramArray.length; i++) {
    if (typeof paramArray[i] === 'object') {
      numbers.push(0)
    } else if (validOperators.indexOf(paramArray[i]) !== -1) {
      operator = paramArray[i]
    } else if (paramArray[i] == parseInt(paramArray[i])) {
      numbers.push(paramArray[i])
    }
  }
  console.log(numbers)

  let numberOne = numbers[0]
  let numberTwo = numbers[1]
  let operation = operator

  console.log(numberOne)
  console.log(numberTwo)
  console.log(operation)
  /* if (typeof numberOne === 'undefined') {
        numberOne = 0
    }
    if (typeof numberTwo === 'undefined') {
        numberTwo = 0
    } */
  switch (operation) {
    case '+':
      return parseInt(numberOne) + parseInt(numberTwo)
    case '-':
      return parseInt(numberOne) - parseInt(numberTwo)
    case '*':
      return parseInt(numberOne) * parseInt(numberTwo)
    case '/':
      return parseInt(numberOne) / parseInt(numberTwo)
    default:
      return NaN
  }
}

/**
 Export an object with two properties.
 One property is `calculate`. The value will be the calculate function.
 The other property is `features` which contains a string value with a description.
 */
module.exports = {
  calculate,
  features: 'Add, Subtract, etc.'
}

console.log(calculate(['13', 'foo', '*', 'bar', 2]))

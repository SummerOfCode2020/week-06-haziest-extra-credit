function calculate(array) {
  let cleanArray = []

  array.forEach(element => {
    if (element === '-' || element === '/' || element === '*' || element === '+') {
      cleanArray.push(element)
    } else if (element === null) {
      cleanArray.push(0)
    } else if (element === '') {
      return ''
    }
    else if (isNaN(element) === false) {
      cleanArray.push(element)
    }
  })

  let numberOne = cleanArray[0]
  let operation = cleanArray[1]
  let numberTwo = cleanArray[2]

  if (cleanArray.length !== 3) {
    return NaN
  }

  return finalCalculate(numberOne, operation, numberTwo)
}


function finalCalculate(numberOne, operation, numberTwo) {
  // cleanse our data of undefined
  const numberOneClean = isNaN(numberOne) ? 0 : numberOne
  const numberTwoClean = isNaN(numberTwo) ? 0 : numberTwo

  switch (operation) {
    case '+':
      return parseInt(numberOneClean) + parseInt(numberTwoClean)
    case '-':
      return parseInt(numberOneClean) - parseInt(numberTwoClean)
    case '*':
      return parseInt(numberOneClean) * parseInt(numberTwoClean)
    case '/':
      return parseInt(numberOneClean) / parseInt(numberTwoClean)
    default:
      return 0
  }
}

/**
 Export an object with two properties.
 One property is `calculate`. The value will be the calculate function.
 The other property is `features` which contains a string value with a description.
 */
module.exports = calculate

// const calculationSteps = [, , '', 23, '-', , 12]

// console.log(calculate(calculationSteps))

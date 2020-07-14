// * Stringified numbers (eg. `'2'`) should be treated as numbers
// * `NULL` should be treated as zero
// * `undefined` values should be ignored
// * Empty string values (eg. `''`) should be ignored
// * Non-numeric values (eg. `'foo'`) should be ignored

function calculate(items) {
  let numberOne = 'x'
  let numberTwo = 'x'
  var operation = ''
  let operations = ['+', '-', '/', '*']
  for (let index = 0; index < items.length; index++) {
    for (let i = 0; i < operations.length; i++) {
      if (items[index] === operations[i]) {
        operation = items[index]
      }
    }
    if (items[index] === null && numberOne === 'x') {
      numberOne = 0
    }
    if (items[index] === null && !isNaN(numberOne)) {
      numberTwo = 0
    }
    if (!isNaN(parseInt(items[index])) && numberOne === 'x') {
      numberOne = parseInt(items[index])
    }
    if (!isNaN(parseInt(items[index])) && !isNaN(numberOne)) {
      numberTwo = parseInt(items[index])
    }
  }
  switch (operation) {
    case '+':
      return numberOne + numberTwo
    case '-':
      return numberOne - numberTwo
    case '*':
      return numberOne * numberTwo
    case '/':
      return numberOne / numberTwo
    default:
      return NaN
  }
}
module.exports = calculate
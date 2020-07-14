/**  for reference:
Our upstream data is inconsistent, so we _intentionally_ accept it 
and deal with it in the following ways:
* Stringified numbers (eg. `'2'`) should be treated as numbers
* `NULL` should be treated as zero
* `undefined` values should be ignored
* Empty string values (eg. `''`) should be ignored
* Non-numeric values (eg. `'foo'`) should be ignored
 */

module.exports = function calculate(array) {
  let numOne = 0
  let numTwo = 0
  let operators = ['+', '-', '*', '/']
  let operator = ''
  let numOneAssigned = false
  let numTwoAssigned = false

  array.forEach(function (item) {
    if (item === null) {
      if (!numOneAssigned) {
        numOneAssigned = true
      } else if (!numTwoAssigned) {
        numTwoAssigned = true
      }
    } else if (typeof item !== 'undefined') {
      if (typeof item === 'number') {
        if (!numOneAssigned) {
          numOne = item
          numOneAssigned = true
        } else if (!numTwoAssigned) {
          numTwo = item
          numTwoAssigned = true
        }
      } else if (typeof item === 'string' && item.length > 0) {
        if (Number.isInteger(parseInt(item))) {
          if (!numOneAssigned) {
            numOne = parseInt(item)
            numOneAssigned = true
          } else if (!numTwoAssigned) {
            numTwo = parseInt(item)
            numTwoAssigned = true
          }
        } else if (operators.indexOf(item) >= 0) {
          operator = item
        } // ignore any other strings
      }
    }
  })
  if (!numOneAssigned || !numTwoAssigned) {
    return NaN
  } // not instructed to handle this case, but no operator is NaN
  switch (operator) {
    case '+':
      return numOne + numTwo
    break;
    case '-':
      return numOne - numTwo
    break;
    case '*':
      return numOne * numTwo
    break;
    case '/':
      return numOne / numTwo
    break;
    default:
      return NaN
  }
}

/**  this does not work
module.exports = {
  calculate,
  features: 'Add, Subtract, etc.'
}
*/

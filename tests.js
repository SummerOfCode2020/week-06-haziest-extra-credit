const { expect } = require('chai')
const { describe, it } = require('mocha')
const calculate = require('./index')

describe('HazyCalculator', () => {
  it('multiplies two numbers when one is stringified', () => {
    const calculationSteps = ['2', '*', 4]

    expect(calculate(calculationSteps)).to.equal(8)
  })

  it('treats null values as zeroes and includes them in the calculation', () => {
    const calculationSteps = [10, '+', null]

    expect(calculate(calculationSteps)).to.equal(10)
  })

  it('ignores undefined and empty string values and continues operation', () => {
    const calculationSteps = [, , '', 23, '-', , 12] // eslint-disable-line no-sparse-arrays

    expect(calculate(calculationSteps)).to.equal(11)
  })

  it('ignores non-numeric values  and continues operation', () => {
    const calculationSteps = ['13', 'foo', '*', 'bar', 2]

    expect(calculate(calculationSteps)).to.equal(26)
  })

  it('returns NaN if the array does not represent a proper operation', () => {
    const calculationSteps = ['13', , '', 15] // eslint-disable-line no-sparse-arrays

    expect(calculate(calculationSteps)).to.be.NaN
  })
})

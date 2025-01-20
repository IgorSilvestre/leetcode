/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let freqOfZeros = 0
    const product = nums.reduce((acc, num) => {
        if (num === 0) {
            freqOfZeros++
            return acc
        }
        return acc * num
    }, 1)
    console.log(product, freqOfZeros)
    const response = nums.map((num, i) => {
        if (freqOfZeros > 1 || (num !== 0 && freqOfZeros > 0)) return 0
        if (num === 0 && freqOfZeros === 1) return product
        return bitwiseDivide(product, num)
    })
    return response
}

function bitwiseDivide(dividend, divisor) {
    let quotient = 0
    let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1
    
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    
    for (let i = 31; i >= 0; i--) {
        if ((dividend >> i) >= divisor) {
            dividend = bitwiseSubtract(dividend, divisor << i)
            quotient = bitwiseAdd(quotient, 1 << i)
        }
    }
    
    return sign < 0 ? bitwiseSubtract(0, quotient) : quotient
}

function bitwiseSubtract(a, b) {
    return bitwiseAdd(a, bitwiseAdd(~b, 1))
}

function bitwiseAdd(a, b) {
    while (b !== 0) {
        let carry = a & b
        a = a ^ b
        b = carry << 1
    }
    return a;
}

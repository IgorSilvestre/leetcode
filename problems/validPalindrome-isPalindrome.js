/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') // leave only lower case alphanumeric
    sReversed = s.split('').reverse().join('')
    if (s === sReversed) return true
    return false
};
